import React from "react";
import arrowWhite from "../../public/assets/images/arrow-white.svg";
import sixid_project from "../../public/assets/sixid-project.png";
import valaga_project from "../../public/assets/valaga.png";
import call_center_project from "../../public/assets/call-center.png";
import kart_project from "../../public/assets/kart.png";
import Image from "next/image";

function Projects(props) {
  return (
    <div id="portfolio" className="our-projects">
      <div className="container-fluid">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Наши проекты</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Настоящие задачи. Конкретный результат. <br />
                Технологии <span>с интеллектом</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="project-item wow fadeInUp">
              <div className="project-image">
                <a href="/project-details/sixid" data-cursor-text="View">
                  <figure className="image-anime">
                    <Image src={sixid_project} alt="sixid_project" />
                  </figure>
                </a>
              </div>
              <div className="project-content">
                <h3>
                  <a href="/project-details/sixid">Sixid</a>
                </h3>
                <p>Экосистема продуктивности</p>
              </div>
              <div className="project-btn">
                <a href="/project-details/sixid">
                  <Image src={arrowWhite} alt=" arrow White" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="project-item wow fadeInUp" data-wow-delay="0.2s">
              <div className="project-image">
                <a href="/project-details/valaga" data-cursor-text="View">
                  <figure className="image-anime">
                    <Image src={valaga_project} alt="valaga_project" />
                  </figure>
                </a>
              </div>
              <div className="project-content">
                <h3>
                  <a href="/project-details/valaga">VALAGA</a>
                </h3>
                <p>Каталог проф. мебели</p>
              </div>
              <div className="project-btn">
                <a href="/project-details/valaga">
                  <Image src={arrowWhite} alt=" arrow White" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="project-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="project-image">
                <a href="/project-details/call-center" data-cursor-text="View">
                  <figure className="image-anime">
                    <Image
                      src={call_center_project}
                      width={500}
                      alt="call_center_project"
                    />
                  </figure>
                </a>
              </div>
              <div className="project-content">
                <h3>
                  <a href="/project-details/call-center">Call Center</a>
                </h3>
                <p>Data Analytics</p>
              </div>
              <div className="project-btn">
                <a href="/project-details/call-center">
                  <Image src={arrowWhite} alt=" arrow White" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="project-item wow fadeInUp" data-wow-delay="0.6s">
              <div className="project-image">
                <a href="/project-details/KART" data-cursor-text="View">
                  <figure className="image-anime">
                    <Image src={kart_project} alt="kart project" />
                  </figure>
                </a>
              </div>
              <div className="project-content">
                <h3>
                  <a href="/project-details/KART">KART DE</a>
                </h3>
                <p>Data Analytics</p>
              </div>
              <div className="project-btn">
                <a href="/project-details/KART">
                  <Image src={arrowWhite} alt=" arrow White" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
