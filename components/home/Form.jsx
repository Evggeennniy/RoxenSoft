"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

function Form() {
  const t = useTranslations("Form");

  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fname.trim()) {
      newErrors.fname = t("errors.fnameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("errors.emailRequired");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = t("errors.emailInvalid");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("errors.phoneRequired");
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus("");
      return;
    }

    setErrors({});
    setSubmitStatus(t("status.sending"));

    try {
      // Получаем IP и геолокацию
      const geoRes = await fetch("https://ipapi.co/json/");
      const geoData = await geoRes.json();

      const ip = geoData.ip || "Unknown";
      const country = geoData.country_name || "Unknown Country";
      const city = geoData.city || "Unknown City";

      const message = `
Name: ${formData.fname}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

🌍 Location:
IP: ${ip}
From Where: ${country}, ${city}
    `;

      const tgRes = await fetch(
        `https://api.telegram.org/bot${
          process.env.NEXT_PUBLIC_API_BOT_TOKEN
        }/sendMessage?chat_id=${
          process.env.NEXT_PUBLIC_CHAT_ID
        }&text=${encodeURIComponent(message)}`
      );

      if (tgRes.ok) {
        setTimeout(() => {
          setSubmitStatus(t("status.success"));
        }, 1500);

        setFormData({
          fname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus(t("status.error"));
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus(t("status.error"));
    }
  };

  return (
    <div id="contact-form" className="page-contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="conatct-us-form">
              <div className="contact-form">
                <div className="section-title">
                  <h2
                    className="wow fadeInUp text-center"
                    data-cursor="-opaque"
                  >
                    {t("leaveRequest")}
                  </h2>
                </div>

                <form
                  id="contactForm"
                  onSubmit={handleSubmit}
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  noValidate
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="fname"
                        className={`form-control ${
                          errors.fname ? "is-invalid" : ""
                        }`}
                        id="fname"
                        placeholder={t("placeholders.fname")}
                        value={formData.fname}
                        onChange={handleChange}
                        required
                      />
                      {errors.fname && (
                        <div className="invalid-feedback">{errors.fname}</div>
                      )}
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        id="email"
                        placeholder={t("placeholders.email")}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    <div className="form-group col-lg-12 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className={`form-control ${
                          errors.phone ? "is-invalid" : ""
                        }`}
                        id="phone"
                        placeholder={t("placeholders.phone")}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                      )}
                    </div>

                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder={t("placeholders.message")}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-lg-12">
                      <div className="contact-form-btn">
                        <button type="submit" className="btn-default">
                          <span>{t("buttons.submit")}</span>
                        </button>
                      </div>
                      {submitStatus && (
                        <div className="mt-3 text-center">
                          <p>{submitStatus}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
