import DeveloperCarousel from "./DeveloperCarousel";
import BannerImage1 from "../../../public/images/team/our team.jpg";
import { Banners } from "../global/NavBanners";

const devData = [
  {
    name: "Abdul Azeem",
    role: "Lead Backend Developer",
    experience: "5+ years",
    skills: ["Nodejs", "Express js", "Nest js", "Python"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Ankit",
    role: "Full Stack Developer Intern",
    experience: "5+ years",
    skills: ["Nodejs", "Express js", "Nest js", "Python"],
    imgUrl: "images/team/avatar.svg",
  },
];

const FrontendData = [
  {
    name: "Mukti Jindal",
    role: "Frontend Developer",
    experience: "5+ years",
    skills: ["Bootstrap", "CSS3", "HTML5"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Anupam",
    role: "Lead Frontend Developer",
    experience: "5+ years",
    skills: ["Tailwind CSS", "HTML5", "Bootstrap"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Ashish Sharma",
    role: "Devops Developer",
    experience: "5+ years",
    skills: ["HTML5", "CSS3", "Tailwind CSS"],
    imgUrl: "images/team/avatar.svg",
  },
];

const DesignerData = [
  {
    name: "Amanat Sabherwal ",
    role: "Graphic Designer",
    experience: "5+ years",
    skills: ["Abobe", "Figma", "Photoshop", "Illustrator"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Vansh Kaushik",
    role: "UI UX Developer",
    experience: "5+ years",
    skills: ["Figma", "Photoshop", "Illustrator"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Aniket Bansal",
    role: "UI UX Developer",
    experience: "5+ years",
    skills: ["Abobe", "Photoshop", "Illustrator"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Chirag Jain",
    role: "UI UX Developer",
    experience: "5+ years",
    skills: ["Abobe", "Figma", "Photoshop"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Tanmay Rathi",
    role: "UI UX Developer",
    experience: "5+ years",
    skills: ["Abobe", "Figma", "Photoshop", "Illustrator"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Saurabh Saxena",
    role: "UI UX Developer",
    experience: "5+ years",
    skills: ["Abobe", "Figma", "Photoshop", "Illustrator"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Uday Chatterjee",
    role: "UI UX Developer",
    experience: "5+ years",
    skills: ["Abobe", "Figma", "Photoshop", "Illustrator"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Pranav Rao",
    role: "UI UX Developer",
    experience: "5+ years",
    skills: ["Abobe", "Figma", "Photoshop", "Illustrator"],
    imgUrl: "images/team/avatar.svg",
  },
];

const ManagementData = [
  {
    name: "Nick",
    role: "Manager",
    experience: "5+ years",
    skills: ["Shopify", "WooCommerce", "WPCommerce"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Naveen",
    role: "Sales Head",
    experience: "5+ years",
    skills: ["Shopify", "WooCommerce", "WPCommerce"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Neeraj Kulkarni",
    role: "Sales Head",
    experience: "5+ years",
    skills: ["Shopify", "WooCommerce", "WPCommerce"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Aditya Sharma",
    role: "Frontend",
    experience: "5+ years",
    skills: ["React js", "Next js", "Angular js", "Vue js", "Typescript"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Aarav Mehta",
    role: "Frontend",
    experience: "5+ years",
    skills: ["React js", "Next js", "Angular js", "Vue js", "Typescript"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Rohan Verma",
    role: "Frontend",
    experience: "5+ years",
    skills: ["React js", "Next js", "Angular js", "Vue js", "Typescript"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Aanya Singh",
    role: "Frontend",
    experience: "5+ years",
    skills: ["React js", "Next js", "Angular js", "Vue js"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Sanya Bansal",
    role: "Frontend",
    experience: "5+ years",
    skills: ["React js", "Next js", "Angular js", "Vue js"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Diya Patel",
    role: "Frontend",
    experience: "5+ years",
    skills: [
      "ChatBot",
      "Data Enigneering",
      "Predictive Analysis",
      "Machine Learning",
    ],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Jayant Pathak",
    role: "Frontend",
    experience: "5+ years",
    skills: [
      "ChatBot",
      "Data Enigneering",
      "Predictive Analysis",
      "Machine Learning",
    ],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Ayan Tripathi",
    role: "Frontend",
    experience: "5+ years",
    skills: [
      "ChatBot",
      "Data Enigneering",
      "Predictive Analysis",
      "Machine Learning",
    ],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Karthik Shenoy",
    role: "Frontend",
    experience: "5+ years",
    skills: [
      "ChatBot",
      "Data Enigneering",
      "Predictive Analysis",
      "Machine Learning",
    ],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Omkar Chavan",
    role: "Frontend",
    experience: "5+ years",
    skills: ["De-Fi", "Smart Contracts", "Public Chain", "Private Chain"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Milan Sehgal",
    role: "Frontend",
    experience: "5+ years",
    skills: ["De-Fi", "Smart Contracts", "Public Chain", "Private Chain"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Keshav Shetty",
    role: "Frontend",
    experience: "5+ years",
    skills: ["De-Fi", "Smart Contracts", "Public Chain", "Private Chain"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Arvind Salunkhe",
    role: "Frontend",
    experience: "5+ years",
    skills: ["De-Fi", "Smart Contracts", "Public Chain"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Abhinav Ghosh",
    role: "Frontend",
    experience: "5+ years",
    skills: ["MySQL", "Firebase", "MongoDB", "Posgre SQL"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Krish Dey",
    role: "Frontend",
    experience: "5+ years",
    skills: ["MySQL", "Firebase", "MongoDB", "Posgre SQL"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Varun Bhatt",
    role: "Frontend",
    experience: "5+ years",
    skills: ["MySQL", "Firebase", "MongoDB", "Posgre SQL"],
    imgUrl: "images/team/avatar.svg",
  },

  {
    name: "Tejas Pillai",
    role: "Frontend",
    experience: "5+ years",
    skills: ["MySQL", "Firebase", "MongoDB", "Posgre SQL"],
    imgUrl: "images/team/avatar.svg",
  },
];

const CMSData = [
  {
    name: "Mukti Jindal",
    role: "Frontend Developer",
    experience: "5+ years",
    skills: ["Wordpress", "Shopify", "Webflow", "Woo Commerce"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Anupam",
    role: "Lead Frontend Developer",
    experience: "5+ years",
    skills: ["Wordpress", "Shopify", "Webflow", "Woo Commerce"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Ashish Sharma",
    role: "Lead Backend Developer",
    experience: "5+ years",
    skills: ["Wordpress", "Shopify", "Webflow", "Woo Commerce"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Abdul Azeem",
    role: "Lead Backend Developer",
    experience: "5+ years",
    skills: ["Wordpress", "Shopify", "Webflow", "Woo Commerce"],
    imgUrl: "images/team/avatar.svg",
  },
  {
    name: "Ankit",
    role: "Full Stack Developer Intern",
    experience: "5+ years",
    skills: ["Wordpress", "Shopify", "Webflow", "Woo Commerce"],
    imgUrl: "images/team/avatar.svg",
  },
];

export default function OurTeamComponent() {
  return (
    <div>
      <Banners
        image={BannerImage1}
        overlayImage
        heading="The Minds Behind the Success"
        description="At DevNexus Solutios our strength is in our team of experts. We are a passionate team of developers, designers, market strategies and digital marketers who are thrive on all challenges with creative thinking."
      />
      <main className="min-h-screen flex flex-col my-10 gap-12 items-center justify-center bg-gray-50">
        <DeveloperCarousel
          developers={FrontendData}
          title="Frontend Developers"
          cardsToShow={3}
          multiSkillFilter={["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]}
        />
        <DeveloperCarousel
          developers={devData}
          title="Backend Developers"
          cardsToShow={3}
          multiSkillFilter={["Nodejs", "Express js", "Nest js", "Python"]}
        />
        <DeveloperCarousel
          developers={CMSData}
          title="CMS Developers"
          cardsToShow={3}
          multiSkillFilter={["Wordpress", "Shopify", "Webflow", "Woo Commerce"]}
        />
        <DeveloperCarousel
          developers={DesignerData}
          title="Web Designing"
          cardsToShow={3}
          multiSkillFilter={["Abobe", "Figma", "Photoshop", "Illustrator"]}
        />
        <DeveloperCarousel
          developers={ManagementData}
          title="Database"
          cardsToShow={3}
          multiSkillFilter={["MySQL", "Firebase", "MongoDB", "Posgre SQL"]}
        />
        <DeveloperCarousel
          developers={ManagementData}
          title="Ecommerce"
          cardsToShow={3}
          multiSkillFilter={["Shopify", "WooCommerce", "WPCommerce"]}
        />
        <DeveloperCarousel
          developers={ManagementData}
          title="Blockchain"
          cardsToShow={3}
          multiSkillFilter={[
            "De-Fi",
            "Smart Contracts",
            "Public Chain",
            "Private Chain",
          ]}
        />
        <DeveloperCarousel
          developers={ManagementData}
          title=" Artificial Intelligence"
          cardsToShow={3}
          multiSkillFilter={[
            "ChatBot",
            "Data Enigneering",
            "Predictive Analysis",
            "Machine Learning",
          ]}
        />

        <DeveloperCarousel
          developers={ManagementData}
          title="Javascript Developer"
          cardsToShow={3}
          multiSkillFilter={[
            "React js",
            "Next js",
            "Angular js",
            "Vue js",
            "Typescript",
          ]}
        />
      </main>
    </div>
  );
}
