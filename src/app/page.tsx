import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import Rabbit from "./3Dmodel/rabbit";

export const siteConfig = {
  name: "Othmane ait taleb",
  description: "I am a Passionate FullStack Developer",
};
export default function Home() {
  return (
    <div className="flex w-full h-screen  ">
      {/* LEFT SIDE  */}
      <div className="relative h-full w-full flex flex-col justify-start gap-4 pt-14 ">
        <div className="flex-1 flex flex-col gap-16">
          <HeroTexts />
          <div className="h-fit w-full  flex ">
            <SocialLinks />
          </div>
          <DownLoadResumeBtn />
        </div>
      </div>
      {/* RIGHT SIDE image  */}
      <div className="  w-full   block max-lg:hidden ">
        {/* IMAGE  */}
        <Rabbit />
        <GithubBtn />
      </div>

      {/* GITHUB BUTTON  */}
    </div>
  );
}
