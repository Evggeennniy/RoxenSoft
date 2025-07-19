"use client";

import { Link } from "@/i18n/navigation";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import translateIcon from "../../public/assets/translate.svg";
import Image from "next/image";

const languages = [
  { code: "ua", title: "Українська" },
  { code: "ru", title: "Русский" },
  { code: "en", title: "English" },
];

export default function LanguageDropdown() {
  const [currentLang, setCurrentLang] = useState({});

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname.split("/")[1];
    const lang = languages.find((lang) => lang.code === locale);
    setCurrentLang(lang || languages[0]);
  }, []);

  return (
    <li className="nav-item">
      <Link href="#" className="nav-link">
        <Image
          width={20}
          height={20}
          alt="Translate Icon"
          className="translate-icon"
          src={translateIcon}
        />{" "}
        {currentLang.title}
      </Link>
      <ul>
        {languages.map(({ code, title }) => (
          <li className="nav-item" key={code}>
            <Link
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const newPath = pathname.replace(currentLang.code, code);
                router.push(newPath);
                setCurrentLang({ code, title });
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
