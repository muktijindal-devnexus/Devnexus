import LandingPage from "./home/page";

export const metadata = {
  title: "DevNexus | Web Development & Digital Transformation Company",
  description: "DevNexus is a Web development & digital solutions company delivering innovative, scalable services for startups, enterprises, & government clients across industries.",
  alternates: {
    canonical: "https://devnexussolutions.com/",
  },
    keywords: [
    " Digital marketing services provider",
    " Web development company",
    " App development company",
    " Blockchain development company",
    " Graphic Design Services",
    " Mobile app development company",
    " Blockchain development",
    " Custom blockchain development",
    " UI/UX design company",
  ],
};


export default function Home() {
  return (
   <div className="bg-[#F5F5F5]">
   <LandingPage />
   </div>
  );
}
