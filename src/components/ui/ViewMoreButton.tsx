import Link from "next/link"
import { Button } from "./button"
import { Icons } from "@/components/ui/icons";

export default function ViewMore(){
    return (
        <>
          <Link href={"/projects"} >
                <Button variant={"ghost"} size={"lg"}  className="ml-12 mt-8"> View More <Icons.squareArrowOutUpRight className="size-3" /> </Button>

                </Link>
        </>
    )
}