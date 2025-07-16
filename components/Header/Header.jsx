"use client";
import React from "react";
import LanguageDropdown from "../LangDropdown/LangDropdown";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from "../../public/assets/images/logo.svg";
import Jumper from "@/features/ux/jumper";

function Header() {
  const t = useTranslations("Header");

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
                    <Link
                      className="nav-link"
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        Jumper("hero", "start");
                      }}
                    >
                      {t("main")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        Jumper("about", "center");
                      }}
                    >
                      {t("aboutUs")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        Jumper("services", "center");
                      }}
                    >
                      {t("services")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        Jumper("portfolio", "start");
                      }}
                    >
                      {t("portfolio")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        Jumper("contacts", "center");
                      }}
                    >
                      {t("contacts")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        Jumper("faq", "center");
                      }}
                    >
                      {t("faq")}
                    </Link>
                  </li>

                  <LanguageDropdown />
                </ul>
              </div>

              <div className="header-btn">
                <Link
                  href="#"
                  className="btn-default"
                  onClick={(e) => {
                    e.preventDefault();
                    Jumper("contact-form", "center");
                  }}
                >
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
