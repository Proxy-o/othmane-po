import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface projectcardprops {
  value: any;
}
const ProjectCards: React.FC<projectcardprops> = ({ value }) => {
  return (
    <Card className="w-[310px] h-[45rem] md:h-[42rem] md:w-96 m-1">
      <CardHeader>
        <Image
          src={value.img}
          alt="project"
          className="border-y  mb-2 h-52 w-full hover:scale-105 hover:transition-transform duration-500"
          width={300}
          height={10}
        />
        <CardTitle>{value.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base font-poppins">{value.description}</p>
        <div className=" w-full h-fit  mt-2 justify-center flex-row gap-3">
          {value.tags.map((itm: string, indx: number) => {
            return (
              <Badge key={indx} className="m-1">
                {itm}
              </Badge>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="items-center justify-center flex">
        <Link
          href={value.link}
          target="blank"
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        >
          Visit Project
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCards;
