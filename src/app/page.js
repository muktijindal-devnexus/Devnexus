import LandingPage from "./home/page";

export const metadata = {
  title: "Global IT Services - DevNexus Solution",
  description: "DevNexus provides digital solutions to startups, enterprises and other type of businesses. Partner with us to unlock digital possibilities. Visit us.",
  alternates: {
    canonical: "https://devnexussolutions.com",
  },
};


export default function Home() {
  return (
   <div className="bg-[#F5F5F5]">
   <LandingPage />
   </div>
  );
}
