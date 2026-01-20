import LandingPage from "./home/page";

export const metadata = {
  title: "DevNexus Solutions | Web Development & Digital Solutions",
  description: "DevNexus is a Web development & digital solutions company delivering innovative, scalable services for startups, enterprises, & govt clients all industries.",
  alternates: {
    canonical: "https://devnexussolutions.com/",
  },
  keywords: [
    " Digital marketing services",
    " Web development company",
    " App development company",
    " Blockchain development",
    " Graphic Design Services",
    " Mobile app development company",
    " Custom blockchain development",
    "Google Ads services",
    "Digital marketing agency",
    " SEO services",
    " UI UX design",
  ],
};


export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <LandingPage />
    </div>
  );
}
