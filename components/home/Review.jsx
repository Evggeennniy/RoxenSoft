import React from "react";
import valoga from "../../public/assets/valoga-logo.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
function Review(props) {
  const t = useTranslations("Review");

  return (
    <div className='our-testimonials'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='testimonials-box'>
              <div className='testimonials-content'>
                <div className='section-title'>
                  <h3 className='wow fadeInUp'>{t("title")}</h3>
                  <h2
                    className='wow fadeInUp'
                    data-wow-delay='0.2s'
                    data-cursor='-opaque'
                  >
                    {t("subtitle.before")}{" "}
                    <span>{t("subtitle.highlight")}</span>
                  </h2>
                  <p className='wow fadeInUp' data-wow-delay='0.4s'>
                    {t("description")}
                  </p>
                </div>

                <div className='testimonials-body'>
                  <div className='testimonials-counter-item'>
                    <h2>
                      <span className='counter'>200</span>+
                    </h2>
                    <p>{t("counters.joy")}</p>
                  </div>

                  <div className='testimonials-counter-item'>
                    <h2>
                      <span className='counter'>600</span>+
                    </h2>
                    <p>{t("counters.smiles")}</p>
                  </div>
                </div>
              </div>

              <div className='testimonial-slider'>
                <div className='swiper'>
                  <div className='swiper-wrapper'>
                    {/* Отзывы оставлены без перевода, как есть */}
                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='testimonial-header'>
                          <div className='testimonial-author'>
                            <div className='author-image'>
                              <figure className='image-anime'>
                                <Image src={valoga} alt='' />
                              </figure>
                            </div>
                            <div className='author-content'>
                              <h3>VALAGA</h3>
                              <p>Мебельная студия</p>
                            </div>
                          </div>
                          <div className='testimonial-quotes-Image'>
                            <Image src={valoga} alt='' />
                          </div>
                        </div>
                        <div className='testimonial-content'>
                          <p>
                            "Працював зі студією IVORISE над вебдизайном сайту —
                            усе чітко, креативно і з розумінням задачі.
                            Результат перевершив очікування. Рекомендую!"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Можно продублировать отзывы или динамически передавать */}
                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='testimonial-header'>
                          <div className='testimonial-author'>
                            <div className='author-image'>
                              <figure className='image-anime'>
                                <Image src={valoga} alt='' />
                              </figure>
                            </div>
                            <div className='author-content'>
                              <h3>VALAGA</h3>
                              <p>Мебельная студия</p>
                            </div>
                          </div>
                          <div className='testimonial-quotes-Image'>
                            <Image src={valoga} alt='' />
                          </div>
                        </div>
                        <div className='testimonial-content'>
                          <p>
                            "Працював зі студією IVORISE над вебдизайном сайту —
                            усе чітко, креативно і з розумінням задачі.
                            Результат перевершив очікування. Рекомендую!"
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='testimonial-header'>
                          <div className='testimonial-author'>
                            <div className='author-image'>
                              <figure className='image-anime'>
                                <Image src={valoga} alt='' />
                              </figure>
                            </div>
                            <div className='author-content'>
                              <h3>VALAGA</h3>
                              <p>Мебельная студия</p>
                            </div>
                          </div>
                          <div className='testimonial-quotes-Image'>
                            <Image src={valoga} alt='' />
                          </div>
                        </div>
                        <div className='testimonial-content'>
                          <p>
                            "Працював зі студією IVORISE над вебдизайном сайту —
                            усе чітко, креативно і з розумінням задачі.
                            Результат перевершив очікування. Рекомендую!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='testimonial-pagination'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Review;
