"use client";
import React from "react";
import LanguageDropdown from "../LangDropdown/LangDropdown";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from "../../public/assets/images/logo.svg";
import { usePathname } from "next/navigation";

function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const hideHeader = pathname.includes("/project-details");

  if (hideHeader) return null;
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image src={logo} alt={t("logoAlt")} />
            </Link>

            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item ">
                    <Link className="nav-link" href="%hero_start">
                      {t("main")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="%about_center">
                      {t("aboutUs")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="%services_center">
                      {t("services")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="%portfolio_start">
                      {t("portfolio")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="%contacts_center">
                      {t("contacts")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="%faq_center">
                      {t("faq")}
                    </Link>
                  </li>

                  <LanguageDropdown />
                </ul>
              </div>

              <div className="header-btn">
                <Link href="%contact-form_center" className="btn-default">
                  {t("consultation")}
                </Link>
              </div>
            </div>
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
}

export default Header;
