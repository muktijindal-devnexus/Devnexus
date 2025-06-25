import "./globals.css";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { Navbar } from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { ContactForm } from "@/components/global/ContactForm";
import ChatBot from "@/components/global/Chatboat";
import Script from "next/script"; // ✅ Import Script

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Global IT Services - DevNexus Solution",
  description:
    "DevNexus provides digital solutions to startups, enterprises and other type of businesses. Partner with us to unlock digital possibilities. Visit us.",
  openGraph: {
    title: "Global IT Services - DevNexus Solution",
    description:
      "DevNexus provides digital solutions to startups, enterprises and other type of businesses. Partner with us to unlock digital possibilities. Visit us.",
    url: "https://devnexussolutions.com/",
    siteName: "DevNexus Solution",
    images: [
      {
        url: "https://res.cloudinary.com/dybqc3gax/image/upload/v1750312905/WhatsApp_Image_2025-06-19_at_11.28.37_htykk3.jpg",
        width: 1200,
        height: 630,
        alt: "DevNexus Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global IT Services - DevNexus Solution",
    description:
      "DevNexus provides digital solutions to startups, enterprises and other type of businesses. Partner with us to unlock digital possibilities. Visit us.",
    images: ["https://res.cloudinary.com/dybqc3gax/image/upload/v1750312905/WhatsApp_Image_2025-06-19_at_11.28.37_htykk3.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
     
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KQSN2X9Q');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
       
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQSN2X9Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar className="" />
        {children}
        <ContactForm />
        <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
