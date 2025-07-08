"use client";

import { Link } from "@/i18n/navigation";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

const languages = [
  { code: "en", labelKey: "language.english" },
  { code: "ru", labelKey: "language.russian" },
  { code: "ua", labelKey: "language.ukrainian" },
];

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations("LanguageDropdown");

  const segments = pathname.split("/").filter(Boolean);
  const languageCodes = languages.map((l) => l.code);
  const currentLang = languageCodes.includes(segments[0]) ? segments[0] : "en";

  const changeLanguage = (code) => {
    setOpen(false);
    let newSegments = [...segments];

    if (languageCodes.includes(newSegments[0])) {
      newSegments[0] = code;
    } else {
      newSegments.unshift(code);
    }

    const newPath = "/" + newSegments.join("/");
    router.replace(newPath);
  };

  return (
    <li className='nav-item submenu' onMouseLeave={() => setOpen(false)}>
      <a
        href='#'
        className='nav-link'
        onClick={(e) => {
          e.preventDefault();
          setOpen((o) => !o);
        }}
      >
        {t("label")}:{" "}
        {languages.find((l) => l.code === currentLang)
          ? t(languages.find((l) => l.code === currentLang).labelKey)
          : currentLang}
      </a>

      {open && (
        <ul>
          {languages.map(({ code, labelKey }) => (
            <li className='nav-item' key={code}>
              <a
                href='#'
                className='nav-link'
                onClick={(e) => {
                  e.preventDefault();
                  if (code !== currentLang) changeLanguage(code);
                }}
                style={{ fontWeight: code === currentLang ? "700" : "normal" }}
              >
                {t(labelKey)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
