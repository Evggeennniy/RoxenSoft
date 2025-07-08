import React from "react";
import tgIcon from "../../public/assets/hugeicons_telegram.svg";
import whatsAppIcon from "../../public/assets/whatsApp.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
function CtaBox() {
  const t = useTranslations("CtaBox");

  return (
    <div className='cta-box'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='cta-box-box'>
              <div className='cta-box-content'>
                <div className='section-title'>
                  <h3 className='wow fadeInUp'>{t("subtitle")}</h3>
                  <h2
                    className='wow fadeInUp'
                    data-wow-delay='0.2s'
                    data-cursor='-opaque'
                  >
                    {t("title.before")} <span>{t("title.highlight")}</span>
                  </h2>
                  <p className='wow fadeInUp' data-wow-delay='0.4s'>
                    {t("description")}
                  </p>
                </div>

                <div
                  className='cta-box-body wow fadeInUp'
                  data-wow-delay='0.6s'
                >
                  <a
                    href='contact.html'
                    className='btn-default btn-highlighted'
                  >
                    {t("btnPrimary")}
                  </a>
                  <a
                    href='contact.html'
                    className='btn-default btn-default__social'
                  >
                    <Image width={20} src={whatsAppIcon} alt='whatsApp' />
                  </a>
                  <a
                    href='contact.html'
                    className='btn-default btn-default__social'
                  >
                    <Image width={20} src={tgIcon} alt='tg' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaBox;
