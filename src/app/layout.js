// app/layout.jsx

import "./globals.css";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { Navbar } from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { ContactForm } from "@/components/global/ContactForm";
import ChatBot from "@/components/global/Chatboat";

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
    card: "https://res.cloudinary.com/dybqc3gax/image/upload/v1750312905/WhatsApp_Image_2025-06-19_at_11.28.37_htykk3.jpg",
    title: "Global IT Services - DevNexus Solution",
    description:
      "DevNexus provides digital solutions to startups, enterprises and other type of businesses. Partner with us to unlock digital possibilities. Visit us.",
    images: ["https://res.cloudinary.com/dybqc3gax/image/upload/v1750312905/WhatsApp_Image_2025-06-19_at_11.28.37_htykk3.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar className="" />
        {children}
        <ContactForm />
        <ChatBot />
        <Footer />
      </body>
      
    </html>
  );
}
