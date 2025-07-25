import React from "react";
import tgIcon from "../../public/assets/hugeicons_telegram.svg";
import whatsAppIcon from "../../public/assets/whatsApp.svg";
import RoxTechIcon from "../../public/assets/RoxTech.svg";
import KARTIcon from "../../public/assets/KART.svg";
import sixidIcon from "../../public/assets/sixid.svg";
import shironIcon from "../../public/assets/shiron.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

function Hero() {
  const t = useTranslations("Hero");

  return (
    <div id="hero" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="hero-content">
              <div className="section-title">
                <h1 className="wow fadeInUp" data-cursor="-opaque">
                  {t("title.part1")} <br /> <span>{t("title.highlight")}</span>
                </h1>
                <p className="wow fadeInUp hero-p" data-wow-delay="0.2s">
                  {t("description")}
                </p>
              </div>

              <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                <Link
                  href="%contact-form_center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-default btn-highlighted"
                >
                  {t("buttons.submitRequest")}
                </Link>
                <div className="d-flex gap-2">
                  <div className="d-flex gap-2">
                    <a
                      href="https://wa.me/+359885769651"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-default btn-default__social"
                    >
                      <Image width={20} src={whatsAppIcon} alt="WhatsApp" />
                    </a>
                    <a
                      href="https://t.me/yevhenii_rox"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-default btn-default__social"
                    >
                      <Image width={20} src={tgIcon} alt="Telegram" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="hero-company-slider">
                <p>{t("partners")}</p>

                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src={RoxTechIcon} alt="RoxTech" />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src={KARTIcon} alt="KART" />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src={sixidIcon} alt="Sixid" />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src={RoxTechIcon} alt="RoxTech" />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src={shironIcon} alt="Shiron" />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="company-logo">
                        <Image src={sixidIcon} alt="Sixid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
