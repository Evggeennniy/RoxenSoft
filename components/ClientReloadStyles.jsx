// ClientReloadStyles.jsx
"use client";
import { useEffect } from "react";

export default function ClientReloadStyles({ locale }) {
  useEffect(() => {
    const href = "/styles/css/swiper-bundle.min.css";
    const oldLink = document.querySelector(`link[href^="${href}"]`);
    if (oldLink) oldLink.remove();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${href}?v=${Date.now()}`;
    document.head.appendChild(link);

    return () => link.remove();
  }, [locale]);

  return null; // ничего не рендерит
}
