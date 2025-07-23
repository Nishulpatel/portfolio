import Link from "next/link";
import { Button } from "./button";
import { Icons } from "@/components/ui/icons";

export default function ViewMore() {
  return (
    <>
      <Link href={"/projects"}>
        <Button variant={"ghost"} size={"lg"} className="mt-8 ml-12">
          {" "}
          View More <Icons.squareArrowOutUpRight className="size-3" />{" "}
        </Button>
      </Link>
    </>
  );
}
