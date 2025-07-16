"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import counterUp from "counterup2";
import roxPreloader from "../public/assets/preloader-logo.png";
import Image from "next/image";

const pluginScripts = [
  "/js/jquery-3.7.1.min.js",
  "/js/jquery.waypoints.min.js",
  "/js/jquery.slicknav.js",
  "/js/bootstrap.min.js",
  "/js/validator.min.js",
  "/js/swiper-bundle.min.js",
  "/js/jquery.magnific-popup.min.js",
  "/js/parallaxie.js",
  "/js/gsap.min.js",
  "/js/magiccursor.js",
  "/js/SplitText.js",
  "/js/ScrollTrigger.min.js",
  "/js/SmoothScroll.js",
  "/js/jquery.mb.YTPlayer.min.js",
  "/js/wow.min.js",
  "/js/function.js",
];
// Новый инициализатор CounterUp2
function initCounterUp2() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.visibility = "visible"; // Показываем элемент
          counterUp(el, { duration: 1000, delay: 16 });
          io.unobserve(el);
        }
      });
    },
    { threshold: 1 }
  );

  document.querySelectorAll(".counter").forEach((el) => {
    el.style.visibility = "hidden"; // Скрываем до старта
    io.observe(el);
  });
}
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) existing.remove();
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Не удалось загрузить ${src}`));
    document.body.appendChild(s);
  });
}

function initGsapPlugins() {
  if (!window.gsap) {
    console.warn("GSAP не найден");
    return;
  }

  if (!window.ScrollTrigger) {
    console.warn("ScrollTrigger не найден");
    return;
  }

  if (!window.SplitText) {
    console.warn("SplitText не найден");
    return;
  }

  // Регистрируем ScrollTrigger плагин
  if (!window.gsap.plugins || !window.gsap.plugins.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
  }

  console.log("GSAP, ScrollTrigger и SplitText инициализированы");
}
function initTextEffectAnimation() {
  if (!(window.gsap && window.ScrollTrigger && window.SplitText)) {
    console.warn("GSAP, ScrollTrigger или SplitText не загружены");
    return;
  }

  const el = document.querySelector(".text-effect.split-text");
  if (!el) return;

  el.style.visibility = "visible";

  const split = new window.SplitText(el, { type: "words,chars" });

  window.gsap.fromTo(
    split.chars,
    { color: "#888888" },
    {
      color: "#ffffff",
      duration: 0.6,
      stagger: 0.03,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        toggleActions: "play reverse play reverse",
        markers: false,
      },
    }
  );

  window.ScrollTrigger.refresh();
}
function initPlugins() {
  const $ = window.jQuery;
  if (!$) return;

  if (window.WOW) {
    const wow = new window.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  }

  if (window.Swiper) {
    document.querySelectorAll(".swiper-container").forEach((el) => {
      new window.Swiper(el, { loop: true, slidesPerView: 1 });
    });
  }

  if ($.fn.magnificPopup) {
    $(".popup-link").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });
  }

  if ($.fn.parallaxie) $(".parallaxie").parallaxie();

  if (typeof window.magicCursorInit === "function") window.magicCursorInit();

  if (window.SmoothScroll) new window.SmoothScroll();

  if ($.fn.mb_YTPlayer) $(".ytplayer").mb_YTPlayer();

  initGsapPlugins();

  initTextEffectAnimation();

  if (typeof window.customFunctionsInit === "function")
    window.customFunctionsInit();
}

export default function DynamicScriptsLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      for (const src of pluginScripts) {
        await loadScript(src);
      }

      initPlugins();
      initCounterUp2();

      setTimeout(() => {
        if (typeof window.gsap !== "undefined") {
          requestAnimationFrame(() => {
            window.gsap.fromTo(
              ".text-effect",
              {
                opacity: 0,
                y: 50,
                top: "50%",
                bottom: "50%",
                backgroundSize: "0% 100%",
              },
              {
                opacity: 1,
                y: 0,
                backgroundSize: "100% 100%",
                duration: 0.2,
                ease: "power2.out",
              }
            );
          });
        }
        setLoading(false);
      }, 200);
    })();
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon">
              <Image src={roxPreloader} alt="loader" width={100} height={80} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
