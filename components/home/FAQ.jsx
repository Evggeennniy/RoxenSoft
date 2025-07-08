import React from "react";

import { useTranslations } from "next-intl";

function FAQ() {
  const t = useTranslations("FAQ");

  return (
    <div id='faq' className='our-faqs'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='faqs-content'>
              <div className='section-title'>
                <h3 className='wow fadeInUp'>{t("title")}</h3>
                <h2
                  className='wow fadeInUp'
                  data-wow-delay='0.2s'
                  data-cursor='-opaque'
                >
                  {t("subtitlePart1")} <span>{t("subtitlePart2")}</span>
                </h2>
              </div>

              <div className='faqs-button wow fadeInUp' data-wow-delay='0.4s'>
                <a href='faqs.html' className='btn-default'>
                  {t("askQuestion")}
                </a>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='faq-accordion' id='accordion'>
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className={`accordion-item wow fadeInUp`}
                  data-wow-delay={`${(num - 1) * 0.2}s`}
                >
                  <h2 className='accordion-header' id={`heading${num}`}>
                    <button
                      className={`accordion-button ${
                        num !== 2 ? "collapsed" : ""
                      }`}
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target={`#collapse${num}`}
                      aria-expanded={num === 2 ? "true" : "false"}
                      aria-controls={`collapse${num}`}
                    >
                      {t(`questions.${num}.question`)}
                    </button>
                  </h2>
                  <div
                    id={`collapse${num}`}
                    className={`accordion-collapse collapse ${
                      num === 2 ? "show" : ""
                    }`}
                    aria-labelledby={`heading${num}`}
                    data-bs-parent='#accordion'
                  >
                    <div className='accordion-body'>
                      <p>{t(`questions.${num}.answer`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
