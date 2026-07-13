import type { Metadata } from "next";
import { Poppins, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import Head from "next/head";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "AC Cleaning Dubai | Professional AC, Duct, Vent Cleaning in Dubai",
  description: "EnviroClean UAE provides professional AC cleaning services in Dubai. We improve your AC's performance and efficiency. Get a free quote today!",
  verification: {
    google: 'm7a4rstuX0H6KVUtR1OJe_HPs0NC3-7N8BQTiBxFDqo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://envirocleanuae.com/#organization",
      "name": "Enviro Clean UAE",
      "url": "https://envirocleanuae.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://envirocleanuae.com/images/logo.webp"
      },
      "email": "info@envirocleanuae.com",
      "telephone": "+971528389414",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971528389414",
        "email": "info@envirocleanuae.com",
        "contactType": "customer service",
        "areaServed": "AE",
        "availableLanguage": ["en", "ar"]
      },
      "sameAs": [
        "https://m.facebook.com/envirocleanuae/",
        "https://www.instagram.com/envirocleanuae/",
        "https://www.youtube.com/channel/UCG0mBHHt0bURaDQxwOs03qw"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://envirocleanuae.com/#localbusiness",
      "name": "Enviro Clean UAE",
      "url": "https://envirocleanuae.com/",
      "image": {
        "@type": "ImageObject",
        "url": "https://envirocleanuae.com/images/logo.webp"
      },
      "telephone": "+971528389414",
      "email": "info@envirocleanuae.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Empire Heights A, 9th Floor",
        "addressLocality": "Business Bay",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "sameAs": [
        "https://m.facebook.com/envirocleanuae/",
        "https://www.instagram.com/envirocleanuae/",
        "https://www.youtube.com/channel/UCG0mBHHt0bURaDQxwOs03qw"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://envirocleanuae.com/#website",
      "url": "https://envirocleanuae.com/",
      "name": "Enviro Clean UAE",
      "publisher": {
        "@type": "Organization",
        "@id": "https://envirocleanuae.com/#organization"
      },
      "inLanguage": "en"
    }
  ];


  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${poppins.variable}`}>
      <head>
        {/* Schema inject karne ka tarika */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLH4XBQ8"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        <Navbar />
        {children}
        <Footer />

        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PL76J4P3');`}
        </Script>
      </body>
    </html>
  );
}
