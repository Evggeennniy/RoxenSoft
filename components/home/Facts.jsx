import { useTranslations } from "next-intl";
import React from "react";

function Facts(props) {
  const t = useTranslations("Facts");

  return (
    <div id='fact' className='our-facts'>
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
          {/* Item 1 */}
          <div className='col-lg-4 col-md-6'>
            <div className='facts-item wow fadeInUp'>
              <div className='facts-item-title'>
                <h3>{t("item1.title")}</h3>
              </div>
              <div className='facts-item-counter'>
                <h2>
                  <span className='counter'>3</span>+
                </h2>
                <p>{t("item1.subtext")}</p>
              </div>
              <div className='facts-item-content'>
                <p>{t("item1.description")}</p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className='col-lg-4 col-md-6'>
            <div className='facts-item wow fadeInUp' data-wow-delay='0.2s'>
              <div className='facts-item-title'>
                <h3>{t("item2.title")}</h3>
              </div>
              <div className='facts-item-counter'>
                <h2>
                  <span className='counter'>15</span>+
                </h2>
                <p>{t("item2.subtext")}</p>
              </div>
              <div className='facts-item-content'>
                <p>{t("item2.description")}</p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className='col-lg-4 col-md-6'>
            <div className='facts-item wow fadeInUp' data-wow-delay='0.4s'>
              <div className='facts-item-title'>
                <h3>{t("item3.title")}</h3>
              </div>
              <div className='facts-item-counter'>
                <h2>
                  <span className='counter'>93</span>%
                </h2>
                <p>{t("item3.subtext")}</p>
              </div>
              <div className='facts-item-content'>
                <p>{t("item3.description")}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className='col-lg-12'>
            <div
              className='section-footer-text wow fadeInUp'
              data-wow-delay='0.6s'
            >
              <p>
                <span>{t("footer.free")}</span>
                {t("footer.text")} <a href='contact.html'>{t("footer.link")}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;
