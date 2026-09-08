import type { Metadata } from "next";
import { Poppins, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import Chatbot from "./components/Chatbot";

export const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap", // Fast font rendering
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap", // Fast font rendering
});

export const metadata: Metadata = {
  title: "AC Cleaning Dubai | Professional AC, Duct, Vent Cleaning in Dubai",
  description:
    "EnviroClean UAE provides professional AC cleaning services in Dubai. We improve your AC's performance and efficiency. Get a free quote today!",
  verification: {
    google: "m7a4rstuX0H6KVUtR1OJe_HPs0NC3-7N8BQTiBxFDqo", // Sirf ek hi google verification rakha hai
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema Objects
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Enviro Clean UAE",
    url: "https://envirocleanuae.com/",
    logo: "https://envirocleanuae.com/images/logo.webp",
    description:
      "Enviro Clean UAE provides professional AC cleaning services in Dubai. We improve your AC's performance and efficiency. Get a free quote today!",
    email: "info@envirocleanuae.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971528389414",
      email: "info@envirocleanuae.com",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["en", "ar"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Empire Height A, 9th Floor, Business Bay, Building 0913",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    sameAs: [
      "https://www.facebook.com/envirocleanuae",
      "https://www.instagram.com/envirocleanuae/",
      "https://www.linkedin.com/company/enviro-clean-uae",
      "https://www.youtube.com/@envirocleanuae435",
    ],
  };

  const hvacBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Enviro Clean UAE",
    url: "https://envirocleanuae.com/",
    image: "https://envirocleanuae.com/images/logo.webp",
    logo: "https://envirocleanuae.com/images/logo.webp",
    description:
      "Enviro Clean UAE provides professional AC cleaning services in Dubai. We improve your AC's performance and efficiency. Get a free quote today.",
    telephone: "+971528389414",
    email: "info@envirocleanuae.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Empire Height A, 9th Floor, Business Bay, Building 0913",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    sameAs: [
      "https://www.facebook.com/envirocleanuae",
      "https://www.instagram.com/envirocleanuae/",
      "https://www.linkedin.com/company/enviro-clean-uae",
      "https://www.youtube.com/@envirocleanuae435",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Enviro Clean UAE",
    url: "https://envirocleanuae.com/",
  };

  return (
    <html lang="en" className={`${urbanist.variable} ${poppins.variable}`}>
      <head>
        {/* Schema Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hvacBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PL76J4P3" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Navbar />
        {/* <Chatbot
          apiUrl="http://localhost:8080"
          // apiUrl="https://chatbot-node-js-ten.vercel.app"
          tenant="pk_o6ywyjuwkzvcavmncr1z5cygqqqi4fcx"
          primaryColor="#0A66A8"
          accentColor="#17A673"
        /> */}
        {children}
        <Footer />

        {/* GTM Script with lazyOnload to improve initial page loading speed */}
        <Script id="gtm-head" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PL76J4P3');`}
        </Script>
      </body>
    </html>
  );
}