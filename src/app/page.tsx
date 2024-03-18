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
    <>
      {/* LEFT SIDE  */}
      <div className=" h-full w-full flex flex-col justify-start gap-4">
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </div>
      {/* RIGHT SIDE image  */}
      <GithubBtn />
      <div className="z-50 h-screen w-full   block max-lg:hidden ">
        {/* IMAGE  */}
        <Rabbit />
      </div>

      {/* GITHUB BUTTON  */}
    </>
  );
}
