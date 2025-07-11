"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScriptsLoader() {
  const pathname = usePathname();
  const locale = useLocale();

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script ${src}`));
      document.body.appendChild(script);
    });
  }

  useEffect(() => {
    async function loadAllScripts() {
      try {
        await loadScript("/js/jquery-3.7.1.min.js");
        await loadScript("/js/bootstrap.min.js");
        await loadScript("/js/validator.min.js");
        await loadScript("/js/jquery.slicknav.js");
        await loadScript("/js/jquery.waypoints.min.js");
        await loadScript("/js/jquery.counterup.min.js");
        await loadScript("/js/jquery.magnific-popup.min.js");
        await loadScript("/js/parallaxie.js");
        await loadScript("/js/gsap.min.js");
        await loadScript("/js/magiccursor.js");
        await loadScript("/js/SplitText.js");
        await loadScript("/js/ScrollTrigger.min.js");
        await loadScript("/js/SmoothScroll.js");
        await loadScript("/js/jquery.mb.YTPlayer.min.js");
        await loadScript("/js/wow.min.js");
        await loadScript("/js/function.js");

        if (window.jQuery) {
          if (window.jQuery.fn.slicknav) {
            window.jQuery(".menu").slicknav();
          }
          if (window.WOW) {
            new window.WOW().init();
          }
        }
      } catch (error) {
        console.error("Ошибка загрузки скриптов:", error);
      }
    }
    loadAllScripts();
  }, [pathname, locale]);

  return null;
}
