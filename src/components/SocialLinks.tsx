import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/", icon: <Facebook /> },
    {
      name: "Twitter",
      link: "https://twitter.com/othmaneaittaleb",
      icon: <Twitter />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/othmane-ait-taleb-11b7a5223/",
      icon: <Linkedin />,
    },
    {
      name: "External",
      link: "https://github.com/Proxy-o",
      icon: <ExternalLink />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        return (
          <Link
            key={indx}
            target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >
            {itm.icon}
          </Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
