import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import Script from "next/script";
import Preloader from "@/components/home/Preloader";
import Header from "@/components/Header/Header";
import Footer from "@/components/home/Footer";

import DynamicScriptsLoader from "@/components/DynamicScriptsLoader";

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
          <Preloader />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>

        <DynamicScriptsLoader />
      </body>
    </html>
  );
}
