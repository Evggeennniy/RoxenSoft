import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
// import Preloader from "@/components/home/Preloader";
import Header from "@/components/Header/Header";
import Footer from "@/components/home/Footer";

import DynamicScriptsLoader from "@/components/DynamicScriptsLoader";

export const metadata = {
  title: "RoxenSoft | Technology Agency ",
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
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link href="https://fonts.googleapis.com" />
        <link href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="/styles/css/bootstrap.min.css"
          rel="stylesheet"
          media="screen"
        />
        <link href="/styles/css/slicknav.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/css/swiper-bundle.min.css" />
        <link href="/styles/css/all.min.css" rel="stylesheet" media="screen" />
        <link href="/styles/css/animate.css" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/css/magnific-popup.css" />
        <link rel="stylesheet" href="/styles/css/mousecursor.css" />
        <link href="/styles/css/custom.css" rel="stylesheet" media="screen" />
      </head>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>

        <DynamicScriptsLoader />
      </body>
    </html>
  );
}
