import React from "react";
import about_item_image_1 from "../../public/assets/images/about-item-image-1.png";
import icon_about_item_1 from "../../public/assets/images/icon-about-item-1.svg";
import about_item_image_2 from "../../public/assets/images/about-item-image-2.png";
import icon_about_item_2 from "../../public/assets/images/icon-about-item-2.svg";
import about_item_image_3 from "../../public/assets/images/about-item-image-3.png";
import icon_about_item_3 from "../../public/assets/images/icon-about-item-3.svg";
import about_item_image_4 from "../../public/assets/images/about-item-image-4.png";
import icon_about_item_4 from "../../public/assets/images/icon-about-item-4.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
function About(props) {
  const t = useTranslations("About");

  return (
    <div id="about" className="about-us">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">{t("title")}</h3>
              <h2 className="text-effect split-text" data-cursor="-opaque">
                {t("description")}
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Первый блок */}
          <div className="col-lg-3 col-md-6">
            <div className="about-us-box">
              <div className="about-us-item">
                <div className="about-item-content">
                  <h3>{t("completed_projects.title")}</h3>
                  <h2>
                    <span className="counter">
                      {t("completed_projects.count")}
                    </span>
                    {t("completed_projects.suffix")}
                  </h2>
                </div>
                <div className="icon-box">
                  <Image
                    src={icon_about_item_1}
                    alt={t("completed_projects.icon_alt")}
                  />
                </div>
              </div>

              <div className="about-item-image">
                <Image
                  src={about_item_image_2}
                  alt={t("completed_projects.image_alt")}
                />
              </div>
            </div>
          </div>

          {/* Второй блок */}
          <div className="col-lg-3 col-md-6">
            <div className="about-us-box">
              <div className="about-us-item">
                <div className="about-item-content">
                  <h3>{t("automated_tasks.title")}</h3>
                  <h2>
                    <span className="counter">
                      {t("automated_tasks.count")}
                    </span>
                    {t("automated_tasks.suffix")}
                  </h2>
                </div>
                <div className="icon-box">
                  <Image
                    src={icon_about_item_2}
                    alt={t("automated_tasks.icon_alt")}
                  />
                </div>
              </div>

              <div className="about-item-image">
                <Image
                  src={about_item_image_1}
                  alt={t("automated_tasks.image_alt")}
                />
              </div>
            </div>
          </div>

          {/* Третий блок */}
          <div className="col-lg-3 col-md-6">
            <div className="about-us-box">
              <div className="about-us-item">
                <div className="about-item-content">
                  <h3>{t("efficiency_increase.title")}</h3>
                  <h2>
                    <span className="counter">
                      {t("efficiency_increase.count")}
                    </span>
                    {t("efficiency_increase.suffix")}
                  </h2>
                </div>
                <div className="icon-box">
                  <Image
                    src={icon_about_item_3}
                    alt={t("efficiency_increase.icon_alt")}
                  />
                </div>
              </div>

              <div className="about-item-image">
                <Image
                  src={about_item_image_3}
                  alt={t("efficiency_increase.image_alt")}
                />
              </div>
            </div>
          </div>

          {/* Четвёртый блок */}
          <div className="col-lg-3 col-md-6">
            <div className="about-us-box">
              <div className="about-us-item">
                <div className="about-item-content">
                  <h3>{t("conversion_improvement.title")}</h3>
                  <h2>
                    <span className="counter">
                      {t("conversion_improvement.count")}
                    </span>
                    {t("conversion_improvement.suffix")}
                  </h2>
                </div>
                <div className="icon-box">
                  <Image
                    src={icon_about_item_4}
                    alt={t("conversion_improvement.icon_alt")}
                  />
                </div>
              </div>

              <div className="about-item-image">
                <Image
                  src={about_item_image_4}
                  alt={t("conversion_improvement.image_alt")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
