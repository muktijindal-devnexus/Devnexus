import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { ContactForm } from "@/components/global/ContactForm";
import ChatBot from "@/components/global/Chatboat";
import InstagramCarousel from "@/components/global/Instagram";

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
  title: " Global IT Services in USA - DevNexus Solution",
  description: "Seeking Global IT Services in USA? Look no further than DevNexus Solution a Best Marketing Company to boost traffic leads and growth. Contact us.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}  antialiased`}
      >
        <Navbar />
        {children}
        <InstagramCarousel />
        <ContactForm />
        <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
