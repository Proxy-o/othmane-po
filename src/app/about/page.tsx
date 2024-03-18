import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "coding" },
    { hobby: "playing games" },
    { hobby: "Watching Anima" },
    { hobby: "Tect Blog writing" },
    { hobby: "creating Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden  ">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3 hover:bg-secondary/30 p-2 rounded-md">
        <Heading>
          Software Engineer And Web <br /> Developer, Based In Morocco.
        </Heading>

        <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
          I am a Full Stack Web Developer based in Morocco, specializing in
          crafting dynamic web applications using Next.js, Django, and Nest.js.
          With a passion for both building innovative projects and contributing
          to open-source initiatives, I take pride in my expertise in TypeScript
          and Python. Known for my meticulous attention to detail and dedication
          to delivering projects efficiently, I specialize in creating
          intuitive, responsive interfaces that captivate users and leave a
          lasting impact.
        </p>
      </div>
      <div className="hover:bg-secondary/30 p-2 rounded-md w-full flex flex-row justify-between max-lg:flex-col my-4 border-y py-4">
        <Aboutfooter />
      </div>
      <div className="block hover:bg-secondary/30 p-2 rounded-md w-full">
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className=" w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                {val.hobby}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
