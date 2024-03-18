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
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface projectcardprops {
  value: any;
}
const ProjectCards: React.FC<projectcardprops> = ({ value }) => {
  return (
    <>
      <CardContainer className="inter-var mr-2 ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl    ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            <Card className="w-full h-[40rem]   m-1">
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
              <CardFooter className="items-center justify-center flex flex-col">
                <Link
                  href={value.link}
                  target="blank"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "mb-2"
                  )}
                >
                  Visit Project
                </Link>
                <Link
                  href={value.preview}
                  target="blank"
                  className={cn(
                    buttonVariants({ variant: "subtle", size: "lg" })
                  )}
                >
                  Preview
                </Link>
              </CardFooter>
            </Card>
          </CardItem>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default ProjectCards;
