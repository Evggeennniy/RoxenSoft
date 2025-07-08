import React from "react";
import icon_how_work_step_1 from "../../public/assets/images/icon-how-work-step-1.svg";
import icon_how_work_step_2 from "../../public/assets/images/icon-how-work-step-2.svg";
import icon_how_work_step_3 from "../../public/assets/images/icon-how-work-step-3.svg";
import icon_how_work_step_4 from "../../public/assets/images/icon-how-work-step-4.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
function HowItWork(props) {
  const t = useTranslations("HowItWork");

  return (
    <div className='how-it-work'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='how-work-content'>
              <div className='section-title'>
                <h3 className='wow fadeInUp'>{t("title")}</h3>
                <h2
                  className='wow fadeInUp'
                  data-wow-delay='0.2s'
                  data-cursor='-opaque'
                >
                  {t("subtitle.before")} <br />
                  <span>{t("subtitle.highlight")}</span>
                </h2>
              </div>

              <div className='how-work-steps'>
                {/* Step 1 */}
                <div
                  className='how-work-item wow fadeInUp'
                  data-wow-delay='0.4s'
                >
                  <div className='how-work-header'>
                    <div className='icon-box'>
                      <Image
                        src={icon_how_work_step_1}
                        alt={t("step1.icon_alt")}
                      />
                    </div>
                    <div className='how-work-step-no'>
                      <p>{t("step1.step")}</p>
                    </div>
                  </div>
                  <div className='how-work-item-content'>
                    <h3>{t("step1.title")}</h3>
                    <p>{t("step1.description")}</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  className='how-work-item wow fadeInUp'
                  data-wow-delay='0.6s'
                >
                  <div className='how-work-header'>
                    <div className='icon-box'>
                      <Image
                        src={icon_how_work_step_2}
                        alt={t("step2.icon_alt")}
                      />
                    </div>
                    <div className='how-work-step-no'>
                      <p>{t("step2.step")}</p>
                    </div>
                  </div>
                  <div className='how-work-item-content'>
                    <h3>{t("step2.title")}</h3>
                    <p>{t("step2.description")}</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  className='how-work-item wow fadeInUp'
                  data-wow-delay='0.8s'
                >
                  <div className='how-work-header'>
                    <div className='icon-box'>
                      <Image
                        src={icon_how_work_step_3}
                        alt={t("step3.icon_alt")}
                      />
                    </div>
                    <div className='how-work-step-no'>
                      <p>{t("step3.step")}</p>
                    </div>
                  </div>
                  <div className='how-work-item-content'>
                    <h3>{t("step3.title")}</h3>
                    <p>{t("step3.description")}</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className='how-work-item wow fadeInUp' data-wow-delay='1s'>
                  <div className='how-work-header'>
                    <div className='icon-box'>
                      <Image
                        src={icon_how_work_step_4}
                        alt={t("step4.icon_alt")}
                      />
                    </div>
                    <div className='how-work-step-no'>
                      <p>{t("step4.step")}</p>
                    </div>
                  </div>
                  <div className='how-work-item-content'>
                    <h3>{t("step4.title")}</h3>
                    <p>{t("step4.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video and final text */}
          <div className='col-lg-6'>
            <div className='how-work-video-content'>
              <div className='how-work-video'>
                <video autoPlay muted loop id='hwvideo'>
                  <source
                    src='https://demo.awaikenthemes.com/assets/videos/nextmind-how-work-video.mp4'
                    type='video/mp4'
                  />
                </video>
              </div>

              <div
                className='section-footer-text wow fadeInUp'
                data-wow-delay='0.2s'
              >
                <p>
                  {t("footer.text")} <br />
                  <a href='contact.html'>{t("footer.link")}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
