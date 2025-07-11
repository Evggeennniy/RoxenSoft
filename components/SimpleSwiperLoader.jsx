"use client";
import { useEffect, useRef } from "react";

export default function SimpleSwiperLoader() {
  const swiperInstance = useRef(null);

  useEffect(() => {
    console.log("SimpleSwiperLoader: useEffect called");
    async function loadAndInit() {
      if (!document.querySelector(".swiper")) {
        console.error("Swiper элемент .testimonial-slider не найден!");
        return;
      }

      // Загружаем скрипт, если нужно
      if (!window.Swiper) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "/js/swiper-bundle.min.js";
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }

      if (swiperInstance.current && swiperInstance.current.destroy) {
        swiperInstance.current.destroy(true, true);
        swiperInstance.current = null;
      }

      const sliderElement = document.querySelector(".swiper");
      if (sliderElement) {
        swiperInstance.current = new window.Swiper(sliderElement, {
          loop: true,
          // другие опции
        });
      }
    }

    loadAndInit();

    // Можно добавить очистку, если нужно
    return () => {
      if (swiperInstance.current && swiperInstance.current.destroy) {
        swiperInstance.current.destroy(true, true);
        swiperInstance.current = null;
      }
    };
  }, []);

  return null;
}
