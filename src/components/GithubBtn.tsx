import { Github } from "lucide-react";
import Link from "next/link";

const GithubBtn = () => {
  return (
    <Link
      href={"https://github.com/proxy-o"}
      target="blank"
      className="absolute animate-pulse  right-0 bottom-28 flex rounded-l-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md  border-y border-r  border-black hover:bg-primary/10 hover:text-white hover:animate-none "
    >
      <Github />
      <span className="font-rubik text-2xl max-sm:text-xl">Github</span>
    </Link>
  );
};

export default GithubBtn;
