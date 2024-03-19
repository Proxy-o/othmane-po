import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            July 2018 - 2022
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
            <div className="text-2xl font-rubik max-sm:text-xl  mb-6">
              Bachelor of Computer Application, <br /> Est Safi
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I have successfully completed my Bachelor of Computer Application
              program at EST Safi, a government school in Morocco. This program
              provided me with a well-rounded education, covering both
              theoretical foundations and practical applications of computer
              science. Through this experience, I have gained valuable knowledge
              and skills that have prepared me for various opportunities in the
              field of computer science
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            July 2022 - 2023
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
            <div className="text-2xl font-rubik max-sm:text-xl  mb-6">
              42 Network, <br /> Coding School
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I have successfully completed the program at 42 Network. This
              experience has equipped me with valuable skills and knowledge in
              the field of computer science, software engineering, and web
              development. Through hands-on projects and collaborative learning,
              I have developed a strong foundation and practical expertise that
              will serve me well in my future endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
