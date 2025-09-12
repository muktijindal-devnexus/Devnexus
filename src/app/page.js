import LandingPage from "./home/page";

export const metadata = {
  title: "Global IT Services - DevNexus Solutions",
  description: "DevNexus provides digital solutions to startups, enterprises and other type of businesses. Partner with us to unlock digital possibilities. Visit us!",
  alternates: {
    canonical: "https://devnexussolutions.com/",
  },
    keywords: [
    "Digital marketing services provider",
    "Web development company",
    "App development company",
    "Blockchain development company",
    "Graphic Design Services",
    "Mobile app development company",
    "Blockchain development",
    "Custom blockchain development",
    "UI/UX design company",
  ],
};


export default function Home() {
  return (
   <div className="bg-[#F5F5F5]">
   <LandingPage />
   </div>
  );
}
