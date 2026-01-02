import "./globals.css";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { Navbar } from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { ContactForm } from "@/components/global/ContactForm";
import ChatBot from "@/components/global/Chatboat";
import Script from "next/script";
import MobileFooter from "@/components/global/MobileFooter";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>DevNexus Solutions | Web Development & Digital Solutions</title> */}
        {/* <meta
          name="description"
          content="DevNexus is a Web development & digital solutions company delivering innovative, scalable services for startups, enterprises, & government clients across industries."
        /> */}

        {/* Open Graph tags for LinkedIn and Facebook */}
        <meta
          property="og:title"
          content="DevNexus | Web Development & Digital Transformation Company"
        />
        <meta
          property="og:description"
          content="DevNexus provides digital solutions to startups, enterprises and other type of businesses. Partner with us to unlock digital possibilities. Visit us."
        />
        <meta property="og:url" content="https://devnexussolutions.com" />
        <meta property="og:site_name" content="DevNexus Solution" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dybqc3gax/image/upload/v1750312905/WhatsApp_Image_2025-06-19_at_11.28.37_htykk3.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DevNexus | Web Development & Digital Transformation Company"
        />
        <meta
          name="twitter:description"
          content="DevNexus provides digital solutions to startups, enterprises and other type of businesses. Partner with us to unlock digital possibilities. Visit us."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dybqc3gax/image/upload/v1750312905/WhatsApp_Image_2025-06-19_at_11.28.37_htykk3.jpg"
        />

        {/* GTM Script */}
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

        <Navbar />
        {children}
        <ContactForm />
        <ChatBot />
        {/* Desktop Footer */}
        <div className="hidden md:block">
          <Footer />
        </div>

        {/* Mobile Footer */}
        <div className="block md:hidden">
          <MobileFooter />
        </div>
      </body>
    </html>
  );
}
