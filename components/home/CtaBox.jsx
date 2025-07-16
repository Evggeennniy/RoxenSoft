import React from "react";
import tgIcon from "../../public/assets/hugeicons_telegram.svg";
import whatsAppIcon from "../../public/assets/whatsApp.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

import JumperLink from "./ui/JumperLink";

function CtaBox() {
  const t = useTranslations("CtaBox");

  return (
    <div id="contacts" className="cta-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-box-box">
              <div className="cta-box-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">{t("subtitle")}</h3>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    {t("title.before")} <span>{t("title.highlight")}</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    {t("description")}
                  </p>
                </div>

                <div
                  className="cta-box-body wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <JumperLink
                    href="/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-default btn-highlighted"
                    targetId="contact-form"
                  >
                    {t("btnPrimary")}
                  </JumperLink>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaBox;
