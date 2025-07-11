import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import Script from "next/script";
import Preloader from "@/components/home/Preloader";
import Header from "@/components/Header/Header";
import Footer from "@/components/home/Footer";
import ScriptsLoader from "@/components/ScriptsLoader";
import SimpleSwiperLoader from "@/components/SimpleSwiperLoader";
import ClientReloadStyles from "@/components/ClientReloadStyles";

export const metadata = {
  title: "Nextmind - AI Agency & Technology HTML Template",
  description: "",
  keywords: "",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* <!-- Google Fonts Css--> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Bootstrap Css --> */}
        <link
          href="/styles/css/bootstrap.min.css"
          rel="stylesheet"
          media="screen"
        />
        {/* <!-- SlickNav Css --> */}
        <link href="/styles/css/slicknav.min.css" rel="stylesheet" />
        {/* <!-- Swiper Css --> */}
        <link rel="stylesheet" href="/styles/css/swiper-bundle.min.css" />
        {/* <!-- Font Awesome Icon Css--> */}
        <link href="/styles/css/all.min.css" rel="stylesheet" media="screen" />
        {/* <!-- Animated Css --> */}
        <link href="/styles/css/animate.css" rel="stylesheet" />
        {/* <!-- Magnific Popup Core Css File --> */}
        <link rel="stylesheet" href="/styles/css/magnific-popup.css" />
        {/* <!-- Mouse Cursor Css File --> */}
        <link rel="stylesheet" href="/styles/css/mousecursor.css" />
        {/* <!-- Main Custom Css --> */}
        <link href="/styles/css/custom.css" rel="stylesheet" media="screen" />
        {/* Можно добавить несколько ссылок */}
      </head>
      <body>
        <NextIntlClientProvider locale={locale}>
          {/* <ClientReloadStyles locale={locale} /> */}
          <Preloader />
          <Header />
          {children}
          <Footer />
          <ScriptsLoader />
        </NextIntlClientProvider>

        {/* <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script
          src="/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/js/magiccursor.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/SmoothScroll.js" strategy="afterInteractive" />
        <Script
          src="/js/jquery.mb.YTPlayer.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/function.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
