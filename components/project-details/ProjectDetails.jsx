"use client";

import { Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import React from "react";
import sixid_project from "../../public/assets/sixid-project.png";
import valaga_project from "../../public/assets/valaga.png";
import call_center_project from "../../public/assets/call-center.png";
import kart_project from "../../public/assets/kart.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from "../../public/assets/images/logo.svg";
const projects = [
  {
    slug: "sixid",
    image: sixid_project,
    titleKey: "projects.sixid.title",
    nicheKey: "projects.sixid.niche",
    clientKey: "projects.sixid.client",
    dateKey: "projects.sixid.date",
    statusKey: "projects.sixid.status",
    description1Key: "projects.sixid.description1",
    description2Key: "projects.sixid.description2",
    challengeKey: "projects.sixid.challenge",
    needsKeys: [
      "projects.sixid.needs.0",
      "projects.sixid.needs.1",
      "projects.sixid.needs.2",
    ],
    solutionKey: "projects.sixid.solution",
    metrics: [
      { value: "5000", unit: "+", labelKey: "projects.sixid.metrics.0" },
      { value: "120", unit: "+", labelKey: "projects.sixid.metrics.1" },
      { value: "92", unit: "%", labelKey: "projects.sixid.metrics.2" },
      { value: "10", unit: "+", labelKey: "projects.sixid.metrics.3" },
    ],
    faqIntroKey: "projects.sixid.faqIntro",
    faqsKeys: [
      {
        questionKey: "projects.sixid.faqs.0.q",
        answerKey: "projects.sixid.faqs.0.a",
      },
      {
        questionKey: "projects.sixid.faqs.1.q",
        answerKey: "projects.sixid.faqs.1.a",
      },
      {
        questionKey: "projects.sixid.faqs.2.q",
        answerKey: "projects.sixid.faqs.2.a",
      },
    ],
  },
  {
    slug: "call-center",
    image: call_center_project,
    titleKey: "projects.callCenter.title",
    nicheKey: "projects.callCenter.niche",
    clientKey: "projects.callCenter.client",
    dateKey: "projects.callCenter.date",
    statusKey: "projects.callCenter.status",
    description1Key: "projects.callCenter.description1",
    description2Key: "projects.callCenter.description2",
    challengeKey: "projects.callCenter.challenge",
    needsKeys: [
      "projects.callCenter.needs.0",
      "projects.callCenter.needs.1",
      "projects.callCenter.needs.2",
    ],
    solutionKey: "projects.callCenter.solution",
    metrics: [
      { value: "590", unit: "+", labelKey: "projects.callCenter.metrics.0" },
      { value: "100", unit: "+", labelKey: "projects.callCenter.metrics.1" },
      { value: "25", unit: "%", labelKey: "projects.callCenter.metrics.2" },
      { value: "15", unit: "+", labelKey: "projects.callCenter.metrics.3" },
    ],
    faqIntroKey: "projects.callCenter.faqIntro",
    faqsKeys: [
      {
        questionKey: "projects.callCenter.faqs.0.q",
        answerKey: "projects.callCenter.faqs.0.a",
      },
      {
        questionKey: "projects.callCenter.faqs.1.q",
        answerKey: "projects.callCenter.faqs.1.a",
      },
      {
        questionKey: "projects.callCenter.faqs.2.q",
        answerKey: "projects.callCenter.faqs.2.a",
      },
    ],
  },
  {
    slug: "valaga",
    image: valaga_project,
    titleKey: "projects.valaga.title",
    nicheKey: "projects.valaga.niche",
    clientKey: "projects.valaga.client",
    dateKey: "projects.valaga.date",
    statusKey: "projects.valaga.status",
    description1Key: "projects.valaga.description1",
    description2Key: "projects.valaga.description2",
    challengeKey: "projects.valaga.challenge",
    needsKeys: [
      "projects.valaga.needs.0",
      "projects.valaga.needs.1",
      "projects.valaga.needs.2",
    ],
    solutionKey: "projects.valaga.solution",
    metrics: [
      { value: "90", unit: "+", labelKey: "projects.valaga.metrics.0" },
      { value: "300", unit: "+", labelKey: "projects.valaga.metrics.1" },
      { value: "31", unit: "%", labelKey: "projects.valaga.metrics.2" },
      { value: "5", unit: "+", labelKey: "projects.valaga.metrics.3" },
    ],
    faqIntroKey: "projects.valaga.faqIntro",
    faqsKeys: [
      {
        questionKey: "projects.valaga.faqs.0.q",
        answerKey: "projects.valaga.faqs.0.a",
      },
      {
        questionKey: "projects.valaga.faqs.1.q",
        answerKey: "projects.valaga.faqs.1.a",
      },
      {
        questionKey: "projects.valaga.faqs.2.q",
        answerKey: "projects.valaga.faqs.2.a",
      },
    ],
  },
  {
    slug: "KART",
    image: kart_project,
    titleKey: "projects.kart.title",
    nicheKey: "projects.kart.niche",
    clientKey: "projects.kart.client",
    dateKey: "projects.kart.date",
    statusKey: "projects.kart.status",
    description1Key: "projects.kart.description1",
    description2Key: "projects.kart.description2",
    challengeKey: "projects.kart.challenge",
    needsKeys: [
      "projects.kart.needs.0",
      "projects.kart.needs.1",
      "projects.kart.needs.2",
    ],
    solutionKey: "projects.kart.solution",
    metrics: [
      { value: "100", unit: "+", labelKey: "projects.kart.metrics.0" },
      { value: "500", unit: "+", labelKey: "projects.kart.metrics.1" },
      { value: "78", unit: "%", labelKey: "projects.kart.metrics.2" },
      { value: "10", unit: "+", labelKey: "projects.kart.metrics.3" },
    ],
    faqIntroKey: "projects.kart.faqIntro",
    faqsKeys: [
      {
        questionKey: "projects.kart.faqs.0.q",
        answerKey: "projects.kart.faqs.0.a",
      },
      {
        questionKey: "projects.kart.faqs.1.q",
        answerKey: "projects.kart.faqs.1.a",
      },
      {
        questionKey: "projects.kart.faqs.2.q",
        answerKey: "projects.kart.faqs.2.a",
      },
    ],
  },
];
function index() {
  const { slug } = useParams();
  const t = useTranslations("ProjectDetails");
  const project = projects.find((p) => p.slug === slug);
  const p = useTranslations(`ProjectDetails`);
  if (!project) {
    return <h2>Проект не найден</h2>;
  }
  return (
    <>
      <div>
        <div className="page-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="page-header-box">
                  <h1 className="wow fadeInUp" data-cursor="-opaque">
                  {t('successfulProjects')} <span>{t('inAction')}</span>
                  </h1>
                  <nav className="wow fadeInUp" data-wow-delay="0.2s">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">home</Link>
                      </li>

                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {p(project.titleKey)}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-project-single">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="page-single-sidebar">
                <div className="project-category wow fadeInUp">
                  <div className="project-category-list">
                    <ul>
                      <li>
                        {t("projectTitle")}: <span>{p(project.titleKey)}</span>
                      </li>
                      <li>
                        {t("niche")}: <span>{p(project.nicheKey)}</span>
                      </li>
                      <li>
                        {t("client")}: <span>{p(project.clientKey)}</span>
                      </li>
                      <li>
                        {t("date")}: <span>{p(project.dateKey)}</span>
                      </li>
                      <li>
                        {t("status")}: <span>{p(project.statusKey)}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-cta-box">
                  <div className="sidebar-cta-logo">
                    <Image src={logo} alt=" Logo" />
                  </div>

                  <div className="sidebar-cta-content">
                    <h3>{t("ctaTitle")}</h3>
                    <p>{t("ctaText")}</p>
                  </div>

                  <div className="sidebar-cta-contact">
                    <ul>
                      <li className="d-flex align-items-center gap-2">
                        <Link
                          href="tel:152885253"
                          className="d-flex align-items-center text-decoration-none gap-2"
                        >
                          <i className="fa-brands fa-2x   fa-telegram gradient-icon d-flex align-items-center"></i>
                          +(00) - 152 885 253
                        </Link>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <Link
                          href="mailto:support@domainname.com"
                          className="d-flex align-items-center text-decoration-none gap-2"
                        >
                          <i className="fa-brands fa-2x fa-whatsapp gradient-icon d-flex align-items-center"></i>
                          support@domainname.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-8">
              <div className="project-single-contemt">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <Image src={project.image} alt={project.titleKey} />
                  </figure>
                </div>

                <div className="project-entry">
                  <h2 className="wow fadeInUp">
                    {t("projectDescription")} <span>{t("project")}</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    {p(project.description1Key)}
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    {p(project.description2Key)}
                  </p>

                  <div className="project-challenge-box">
                    <h2 className="wow fadeInUp">
                      {t("challenge")} <span>{t("needs")}</span>
                    </h2>

                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      {p(project.challengeKey)}
                    </p>

                    <ul
                      className="project-challenge-list wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      {project.needsKeys.map((key, index) => (
                        <li key={index}>{p(key)}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-solution-box">
                    <h2 className="wow fadeInUp">
                      {t("prototype")} <span>{t("solution")}</span>
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      {p(project.solutionKey)}
                    </p>

                    <div className="project-solution-counters">
                      {project.metrics.map((metric, index) => (
                        <div className="solution-counter-item" key={index}>
                          <h2>
                            <span className="counter">{metric.value}</span>
                            {metric.unit}
                          </h2>
                          <p>{p(metric.labelKey)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* FAQs */}
                <div className="page-single-faqs">
                  <div className="section-title">
                    <h2 className="wow fadeInUp">
                      {t("faqTitle")} <span>{t("faqSubtitle")}</span>
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      {project.faqIntro}
                    </p>
                  </div>

                  <div className="faq-accordion" id="faqaccordion">
                    {project.faqsKeys.map((faq, index) => (
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay={`${index * 0.2}s`}
                        key={index}
                      >
                        <h2 className="accordion-header" id={`heading${index}`}>
                          <button
                            className={`accordion-button ${
                              index === 1 ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded={index === 1 ? "true" : "false"}
                            aria-controls={`collapse${index}`}
                          >
                            {index + 1}. {p(faq.questionKey)}
                          </button>
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className={`accordion-collapse collapse ${
                            index === 1 ? "show" : ""
                          }`}
                          aria-labelledby={`heading${index}`}
                          data-bs-parent="#faqaccordion"
                        >
                          <div className="accordion-body">
                            <p>{p(faq.answerKey)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
