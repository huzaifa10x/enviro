import type { Metadata } from "next";
import { Poppins, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";


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
}: {
  children: React.ReactNode;
}) {
  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Enviro Clean UAE",
    "url": "https://envirocleanuae.com/",
    "logo": "https://envirocleanuae.com/images/logo.webp",
    "description": "Enviro Clean UAE provides professional AC cleaning services in Dubai. We improve your AC's performance and efficiency. Get a free quote today!",
    "email": "info@envirocleanuae.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971528389414",
      "email": "info@envirocleanuae.com",
      "contactType": "customer service",
      "areaServed": "AE",
      "availableLanguage": ["en", "ar"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Empire Height A, 9th Floor, Business Bay, Building 0913",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "sameAs": [
      "https://www.facebook.com/envirocleanuae",
      "https://www.instagram.com/envirocleanuae/",
      "https://www.linkedin.com/company/enviro-clean-uae",
      "https://www.youtube.com/@envirocleanuae435"
    ]
  };

  // 2. HVACBusiness Schema
  const hvacBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Enviro Clean UAE",
    "url": "https://envirocleanuae.com/",
    "image": "https://envirocleanuae.com/images/logo.webp",
    "logo": "https://envirocleanuae.com/images/logo.webp",
    "description": "Enviro Clean UAE provides professional AC cleaning services in Dubai. We improve your AC's performance and efficiency. Get a free quote today.",
    "telephone": "+971528389414",
    "email": "info@envirocleanuae.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Empire Height A, 9th Floor, Business Bay, Building 0913",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "sameAs": [
      "https://www.facebook.com/envirocleanuae",
      "https://www.instagram.com/envirocleanuae/",
      "https://www.linkedin.com/company/enviro-clean-uae",
      "https://www.youtube.com/@envirocleanuae435"
    ]
  };

  // 3. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Enviro Clean UAE",
    "url": "https://envirocleanuae.com/"
  };

  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${poppins.variable}`}>
      <head>
        <meta name="google-site-verification" content="illJhh1Mlw4zzfZz5vaHF4eBaKZ5h4bChvizmdxYOas" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Local HVAC Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hvacBusinessSchema),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON) }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        <noscript
          dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PL76J4P3" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}
        />
        <Navbar />
        {children}
        <Footer />

        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PL76J4P3');`}
        </Script>

        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496"
          integrity="sha512-ZE9pZaUXND66v380QUtch/5sE9tPFh2zg45pR2PB0CVkCtOREv2AJKkSidISWkysEuQ0EH8faUU5du78bx87UQ=="
          crossOrigin="anonymous"
          data-cf-beacon='{"version":"2024.11.0","token":"c18d5b8d3b854743974103d60c6d520e","r":1}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
