"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import loader from "../../public/assets/images/loader.svg";
export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function handleLoad() {
      setLoading(false);
    }

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <Image src={loader} alt="loader" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
