"use client";
import React from "react";
import LanguageDropdown from "../LangDropdown/LangDropdown";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from "../../public/assets/images/logo.svg";

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
                    <Link className="nav-link" href="/">
                      {t("main")}
                    </Link>
                    {/* <ul>
                      <li className="nav-item">
                        <Link className="nav-link" href="index.html">
                          {t("mainVariants.homeMain")}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="index-image.html">
                          {t("mainVariants.homeImage")}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="index-video.html">
                          {t("mainVariants.homeVideo")}
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/#services">
                      {t("services")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/#about">
                      {t("aboutUs")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/#portfolio">
                      {t("portfolio")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#faq">
                      {t("faq")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      {t("contacts")}
                    </Link>
                  </li>
                  <LanguageDropdown />
                </ul>
              </div>

              <div className="header-btn">
                <Link href="#" className="btn-default">
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
