import React from "react";
import service_item_1 from "../../public/assets/images/service-item-1.png";
import service_item_2 from "../../public/assets/images/service-item-2.png";
import service_item_3 from "../../public/assets/images/service-item-3.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
function OurServices(props) {
  const t = useTranslations("OurServices");

  return (
    <div id='services' className='our-services'>
      <div className='container'>
        <div className='row section-row'>
          <div className='col-lg-12'>
            <div className='section-title section-title-center'>
              <h3 className='wow fadeInUp'>{t("title")}</h3>
              <h2
                className='wow fadeInUp'
                data-wow-delay='0.2s'
                data-cursor='-opaque'
              >
                {t("subtitle.before")} <span>{t("subtitle.highlight")}</span>
              </h2>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='service-item wow fadeInUp'>
              <div className='service-item-content'>
                <h3>
                  <a href='service-single.html'>{t("service1.title")}</a>
                </h3>
                <p>{t("service1.description")}</p>
              </div>
              <div className='service-item-image'>
                <figure>
                  <Image src={service_item_1} alt={t("service1.alt")} />
                </figure>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='service-item wow fadeInUp' data-wow-delay='0.2s'>
              <div className='service-item-content'>
                <h3>
                  <a href='service-single.html'>{t("service2.title")}</a>
                </h3>
                <p>{t("service2.description")}</p>
              </div>
              <div className='service-item-image'>
                <figure>
                  <Image src={service_item_2} alt={t("service2.alt")} />
                </figure>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='service-item wow fadeInUp' data-wow-delay='0.4s'>
              <div className='service-item-content'>
                <h3>
                  <a href='service-single.html'>{t("service3.title")}</a>
                </h3>
                <p>{t("service3.description")}</p>
              </div>
              <div className='service-item-image'>
                <figure>
                  <Image src={service_item_3} alt={t("service3.alt")} />
                </figure>
              </div>
            </div>
          </div>

          <div className='col-lg-12'>
            <div className='service-list wow fadeInUp' data-wow-delay='0.6s'>
              <ul>
                <li>{t("list.0")}</li>
                <li>{t("list.1")}</li>
                <li>{t("list.2")}</li>
                <li>{t("list.3")}</li>
                <li>{t("list.4")}</li>
                <li>{t("list.5")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
