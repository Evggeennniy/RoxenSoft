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
const projects = [
  {
    slug: "sixid",
    title: "SIXID",
    niche: "Продуктивность",
    client: "Марк Коношко",
    date: "10.07.2025",
    status: "40 дней",
    image: sixid_project,
    description1:
      "Инструменты SIXID — это ваш персональный компас в мире целей, задач и ресурсов. Экосистема позволяет управлять временем, контролировать прогресс, концентрироваться на важном и избавляться от хаоса.",
    description2:
      "С помощью модулей SIXID вы можете строить путь к своим амбициям: от личных и финансовых целей до повседневных привычек. Разрабатываем решения, которые глубоко интегрируются в образ жизни, усиливая осознанность, дисциплину и чувство контроля.",
    challenge:
      "Многие современные люди сталкиваются с тем, что при высоком темпе жизни всё сложнее сохранить фокус, управлять временем и достигать поставленных целей. SIXID решает эти задачи, предоставляя цифровые инструменты, которые помогают вам структурировать свой день, выстроить стратегию и достичь баланса между личным и профессиональным.",
    needs: [
      "Помогает выявить приоритеты и выстроить путь к цели, устраняя перегруз и дезорганизацию.",
      "Будь вы предприниматель или специалист — модули SIXID адаптируются под ваш стиль жизни.",
      "Встроеная аналитика и отслеживание, полная прозрачность своих действий и результатов.",
    ],
    solution:
      "SIXID — это не просто приложение. Это экосистема, которая объединяет цели, задачи, привычки, бюджеты и ключевые сферы жизни в единое пространство. Сервис помогает людям и командам организовать свои действия, освободить ум от хаоса и фокусироваться на действительно важном. Система построена таким образом, чтобы вы могли планировать, анализировать и адаптироваться под изменения — как в личных целях, так и в бизнес-стратегиях. Принимаете решения осознанно, отслеживаете прогресс и ускоряете рост.",
    metrics: [
      { value: "5000", unit: "+", label: "Выполненных задач" },
      { value: "120", unit: "+", label: "Реализовано целей" },
      { value: "92", unit: "%", label: "Рост продуктивности" },
      { value: "10", unit: "+", label: "Приложений" },
    ],
    faqIntro:
      "Здесь мы собрали самые частые вопросы, которые помогают понять, как работает система, кому она подходит и какие возможности она предоставляет.",
    faqs: [
      {
        question: "Для кого подходит система SIXID?",
        answer:
          "SIXID подходит для предпринимателей, фрилансеров, команд, специалистов и всех, кто хочет структурировать жизнь, бизнес и повседневные задачи.",
      },
      {
        question: "Можно ли интегрировать SIXID с другими сервисами?",
        answer:
          "Да, мы предусмотрели API и вебхуки для подключения внешних систем — например, CRM, Google Календарь, почта и другие.",
      },
      {
        question: "Сколько сфер жизни охватывает система SIXID?",
        answer:
          "SIXID охватывает цели, задачи, финансы, календарь, заметки и эмоциональное состояние — всё, что важно для организации жизни и роста в одном месте.",
      },
    ],
  },
  {
    slug: "call-center",
    title: "Call Center",
    niche: "Продуктивность",
    client: "Марк Коношко",
    date: "25.08.2025",
    status: "54 дня",
    image: call_center_project,
    description1:
      "CRM-система разработана для автоматизации процессов в колл-центре. Решение включает модули управления входящими и исходящими звонками, контроль за выполнением задач, сбор и анализ статистики, а также разграничение прав доступа по ролям (оператор, супервайзер, клиент, администратор).",
    description2:
      "Система оптимизирует рабочие процессы, повышает прозрачность действий сотрудников и упрощает анализ эффективности.",
    challenge:
      "Многие колл-центры сталкиваются с недостаточной систематизацией данных, высокой нагрузкой на сотрудников и отсутствием аналитики по ключевым показателям. Это приводит к потере качества обслуживания и снижению общей эффективности.",
    needs: [
      "Снижает время на управление задачами и формирование отчётов",
      "Обеспечивает полную прозрачность работы операторов",
      "Адаптируется под структуру любого колл-центра и тип клиентов",
    ],
    solution:
      "CRM-система ориентирована на колл-центры и позволяет объединить задачи, обращения, звонки, аналитику и роли сотрудников в едином цифровом пространстве. Система оптимизирует рабочие процессы, повышает прозрачность и автоматизирует рутинные действия операторов и менеджеров. Функционал адаптируется под различные сценарии — от ежедневной поддержки клиентов до оценки KPI и обучения сотрудников. Повышается контроль, ускоряется принятие решений, снижается нагрузка на руководство.",
    metrics: [
      { value: "590", unit: "+", label: "Продаж в мес." },
      { value: "100", unit: "+", label: "Сэкономленных часов" },
      { value: "25", unit: "%", label: "Рост конверсии" },
      { value: "15", unit: "+", label: "Подключенных CRM" },
    ],
    faqIntro:
      "Здесь мы собрали самые частые вопросы, которые помогают понять, как работает система, кому она подходит и какие возможности она предоставляет.",
    faqs: [
      {
        question: "Для кого подходит система?",
        answer:
          "Подходит для компаний с внутренним или внешним колл-центром, где требуется отслеживать обращения, автоматизировать звонки и разделять доступ по ролям. Эффективна для отделов продаж, поддержки, телемаркетинга и опросов.",
      },
      {
        question: "Можно ли интегрировать с другими системами?",
        answer:
          "Да, предусмотрены API и webhook-интеграции. Можно подключить CRM, сторонние телефонии, мессенджеры и внутренние корпоративные системы.",
      },
      {
        question: "Какие роли поддерживаются в системе?",
        answer:
          "Система реализует гибкую модель доступа: Оператор, Супервайзер, Администратор, Клиент. Это позволяет разграничить видимость данных и действий в зависимости от должности.",
      },
    ],
  },
  {
    slug: "valaga",
    title: "VALAGA",
    niche: "каталог мебели",
    client: "Богдан Валага",
    date: "09.05.2025",
    status: "17 дней",
    image: valaga_project,
    description1:
      "Цифровая платформа разработана для автоматизации процессов в магазине мебели. Решение включает модули управления товарами и заказами, отслеживание остатков, ведение клиентской базы, сбор и анализ продаж, а также разграничение прав доступа по ролям.",
    description2:
      "Система оптимизирует внутренние процессы, повышает прозрачность работы сотрудников и упрощает анализ эффективности продаж.",
    challenge:
      "Многие мебельные магазины сталкиваются с нехваткой автоматизации, ручным учетом, ошибками при формировании заказов и недостаточной аналитикой по ассортименту и клиентам. Это ведет к потерям времени, снижению уровня обслуживания и упущенной прибыли.",
    needs: [
      "Снижает время на учёт товаров, формирование заказов и инвентаризацию",
      "Обеспечивает прозрачную работу всех сотрудников — от склада до кассы",
      "Адаптируется под формат любого мебельного бизнеса — от шоурума до интернет-магазина",
    ],
    solution:
      "Платформа ориентирована на мебельные магазины и объединяет управление каталогом товаров, заказами, клиентскими данными и логистикой в одном цифровом пространстве. Система автоматизирует ключевые процессы: от приёма заказа до отгрузки, обеспечивает прозрачность работы сотрудников и помогает избежать ошибок при комплектации и доставке.",
    metrics: [
      { value: "90", unit: "+", label: "Продаж в мес." },
      { value: "300", unit: "+", label: "Часов обработки" },
      { value: "31", unit: "%", label: "Повторных покупок" },
      { value: "5", unit: "+", label: "Интеграций" },
    ],
    faqIntro:
      "Здесь мы собрали самые частые вопросы, которые помогают понять, как работает система, кому она подходит и какие возможности она предоставляет.",
    faqs: [
      {
        question: "Для кого подходит система?",
        answer:
          "Подходит для мебельных магазинов любого масштаба — от локальных салонов до интернет-магазинов. Идеально для владельцев, менеджеров по продажам, складского персонала и службы доставки.",
      },
      {
        question: "Можно ли интегрировать с другими системами?",
        answer:
          "Да, система поддерживает интеграцию с 1С, МойСклад, Rozetka, Prom, OLX, WooCommerce, а также с курьерскими службами и CRM. Это позволяет синхронизировать заказы, остатки и клиентов в реальном времени.",
      },
      {
        question: "Можно ли отслеживать остатки и движение товаров на складе?",
        answer:
          "Да, система позволяет в режиме реального времени отслеживать остатки, движение товаров между складами и продажу по каждой единице. Также доступны уведомления о низком остатке, резервирование под заказ и история перемещений. Это минимизирует ошибки и помогает лучше планировать закупки.",
      },
    ],
  },
  {
    title: "KART DE",
    slug: "KART",
    niche: "Подология",
    client: "Игорь Левин",
    date: "29.07.2025",
    status: "31 дня",
    image: kart_project,
    description1:
      "Более 30 лет компания KART сотрудничает с научно-исследовательскими центрами и пилотными институтами Израиля, поддерживает постоянную и тесную связь с практикующими специалистами, учитывает их замечания и пожелания, разрабатывает и усовершенствует уникальные формулы продуктов, с высокой концентрацией активных веществ, использует редкие и эксклюзивные ингредиенты растительного и морского происхождения.",
    description2:
      "Нужна помощь? Мы всегда готовы поддержать вас, дать советы и предоставить необходимые ресурсы. Обращайтесь в любое время.",
    challenge:
      "Трудности в систематизации заказов, контроле дистрибуции и взаимодействии с салонами красоты и специалистами. Отсутствие автоматизации приводит к задержкам, ошибкам в логистике, сложностям в анализе продаж и нехватке прозрачности в работе с клиентами.",
    needs: [
      "Снижает нагрузку при оформлении заказов, учёте остатков и работе с партнёрами",
      "Обеспечивает контроль над цепочкой дистрибуции — от центрального склада до косметолога",
      "Адаптируется под формат работы профессиональных брендов и международных рынков",
    ],
    solution:
      "Цифровая платформа создана с учётом потребностей профессиональных косметических брендов. Она объединяет все ключевые процессы KART в единую систему: от обработки заказов и учёта пробников до контроля дистрибуции и аналитики по салонам и клиентам.",
    metrics: [
      { value: "100", unit: "+", label: "Заказов  в месяц" },
      { value: "500", unit: "+", label: "Часов  обработки" },
      { value: "78", unit: "%", label: "Повторных покупок" },
      { value: "10", unit: "+", label: "Интеграций" },
    ],
    faqIntro:
      "Здесь мы собрали самые частые вопросы, которые помогают понять, как работает система, кому она подходит и какие возможности она предоставляет.",
    faqs: [
      {
        question: "Для кого подходит система?",
        answer:
          "Система идеально подходит для косметических брендов, сетей дистрибуции, обучающих академий и профессиональных салонов. Особенно эффективна для работы с дистрибьюторами, косметологами, складами и онлайн-заказами.",
      },
      {
        question: "Можно ли интегрировать с другими системами?",
        answer:
          "Да, поддерживается интеграция c CRM-системами, платёжными шлюзами, службами доставки. Это позволяет централизованно управлять всеми каналами продаж и логистики.",
      },
      {
        question: "Можно ли учитывать бонусы, подарки и пробники в системе?",
        answer:
          "Да, система позволяет отдельно учитывать пробники, подарочные позиции и бонусные продукты. Вы можете автоматически добавлять их к заказам по заданным условиям (например, 'при покупке от 300 шекелей — подарок').",
      },
    ],
  },
];
function index() {
  const { slug } = useParams();
  const t = useTranslations("ProjectDetails");
  const project = projects.find((p) => p.slug === slug);
  const p = useTranslations(`ProjectDetails.${slug}`);
  if (!project) {
    return <h2>Проект не найден</h2>;
  }
  return (
    <>
      <div>
        <div class="page-header">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="page-header-box">
                  <h1 class="wow fadeInUp" data-cursor="-opaque">
                    Успешные проекты <span>в действии</span>
                  </h1>
                  <nav class="wow fadeInUp" data-wow-delay="0.2s">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <Link href="/">home</Link>
                      </li>

                      <li class="breadcrumb-item active" aria-current="page">
                        {project.title}
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
                        {t("projectTitle")}: <span>{project.title}</span>
                      </li>
                      <li>
                        {t("niche")}: <span>{project.niche}</span>
                      </li>
                      <li>
                        {t("client")}: <span>{project.client}</span>
                      </li>
                      <li>
                        {t("date")}: <span>{project.date}</span>
                      </li>
                      <li>
                        {t("status")}: <span>{project.status}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-cta-box">
                  <div className="sidebar-cta-logo">
                    <img src="/images/sidebar-cta-logo.svg" alt="CTA Logo" />
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
                          <i className="fa-brands fa-xl fa-telegram gradient-icon d-flex align-items-center"></i>
                          +(00) - 152 885 253
                        </Link>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <Link
                          href="mailto:support@domainname.com"
                          className="d-flex align-items-center text-decoration-none gap-2"
                        >
                          <i className="fa-brands fa-xl fa-whatsapp gradient-icon d-flex align-items-center"></i>
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
                    <Image src={project.image} alt={project.title} />
                  </figure>
                </div>

                <div className="project-entry">
                  <h2 className="wow fadeInUp">
                    {t("projectDescription")} <span>{t("project")}</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    {project.description1}
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    {project.description2}
                  </p>

                  <div className="project-challenge-box">
                    <h2 className="wow fadeInUp">
                      {t("challenge")} <span>{t("needs")}</span>
                    </h2>

                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      {project.challenge}
                    </p>

                    <ul
                      className="project-challenge-list wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      {project.needs.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-solution-box">
                    <h2 className="wow fadeInUp">
                      {t(" prototype")} <span>{t("solution")}</span>
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      {project.solution}
                    </p>

                    <div className="project-solution-counters">
                      {project.metrics.map((metric, index) => (
                        <div className="solution-counter-item" key={index}>
                          <h2>
                            <span className="counter">{metric.value}</span>
                            {metric.unit}
                          </h2>
                          <p>{metric.label}</p>
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
                    {project.faqs.map((faq, index) => (
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
                            {index + 1}. {faq.question}
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
                            <p>{faq.answer}</p>
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
