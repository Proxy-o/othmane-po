import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import typing from "../../../public/typing.png";
import ddq from "../../../public/ddq.png";
import voiture from "../../../public/voiture.png";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Typing Speed Game",
      img: typing,
      description:
        "A gripping typing speed game powered by Next.js, Nest.js, and Tailwind CSS, with an extra dash of Socket.io and PostgreSQL . Beat the clock as you type out words and sentences with precision, all within a seamlessly responsive interface crafted by Next.js. ",
      tags: [
        "Sockets",
        "NestJs",
        "Typescript",
        "NextJs",
        "PostgreSQL",
        "TailwindCSS",
      ],
      link: "https://github.com/Proxy-o/1337type",
      preview: "https://1337type.vercel.app/",
    },

    {
      title: "Next car",
      img: voiture,
      description:
        "The project is a SaaS application designed to create invoices for clients purchasing cars from a company. With seamless integration, users can generate invoices efficiently, facilitating smooth transactions between businesses and clients.",
      tags: ["React Query", "Typescript", "NextJs", "TailwindCSS", "DarkMode"],
      link: "https://github.com/Proxy-o/voiture",
      preview: "https://voiture-test.vercel.app/",
    },
    {
      title: "DDQ 360",
      img: ddq,
      description:
        "Data-Driven Quiz (DDQ) built with Next.js, Firebase, and Tailwind CSS. This dynamic platform offers users an immersive quiz experience driven by real-time data interactions. With Next.js, the frontend is sleek and responsive, adapting seamlessly to any device.",
      tags: ["Firebase", "React Query", "Typescript", "NextJs", "TailwindCSS"],
      link: "https://ddq-360.vercel.app/",
      preview: "https://ddq-360.vercel.app/",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>

        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
          I love to Build Cool Projects. Here, you&#x27;ll find a curated
          collection of my creative endeavors and technical projects. Each piece
          represents a journey of innovation, problem-solving, and continuous
          learning. Feel free to explore this showcase of my passion and
          expertise in action.
        </p>
      </div>

      <div className=" w-full flex flex-col items-center justify-center  md:flex-row md:flex-wrap ">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
