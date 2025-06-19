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
  title: "Global IT Services in USA - DevNexus Solution",
  description:
    "Seeking Global IT Services in USA? Look no further than DevNexus Solution, a best marketing company to boost traffic, leads, and growth. Contact us.",
  openGraph: {
    title: "Global IT Services in USA - DevNexus Solution",
    description:
      "Looking for reliable IT and marketing services in the USA? DevNexus Solution helps you grow your business with expert digital strategies.",
    url: "https://yourdomain.com",
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
    title: "Global IT Services in USA - DevNexus Solution",
    description:
      "Top digital and IT services provider to accelerate your business growth.",
    images: ["https://yourdomain.com/images/og-image.jpg"], // same as above
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
