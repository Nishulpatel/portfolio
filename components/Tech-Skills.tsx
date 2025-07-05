import { Button } from "../components/ui/button";
import { FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { PiFileCssFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export default function TechSkills() {

    return(
        <div className="">
          <h2 className="text-[16px] font-extrabold">Tech Skills -</h2>

          <div className="flex flex-wrap border p-4 gap-2 border-gray-500 mt-2 ">

              <Button variant="outline" size="sm">
              <FaJava /> Java
              </Button>

               <Button variant="outline" size="sm">
              <FaJs /> Javascript
              </Button>

               <Button variant="outline" size="sm">
              <BiLogoTypescript /> Typesript
              </Button>

          </div>
          
          <div className="flex flex-wrap border p-2 border-gray-500 gap-2 mt-2 ">
              <Button variant="outline" size="sm">
              <FaHtml5 /> Html
              </Button>

              <Button variant="outline" size="sm">
              <PiFileCssFill /> CSS
              </Button>

              <Button variant="outline" size="sm">
              <FaReact /> React
              </Button>

              <Button variant="outline" size="sm">
              <RiTailwindCssFill /> Tailwind
              </Button>

              <Button variant="outline" size="sm">
              <TbBrandFramerMotion /> Framer motion
              </Button>

              <Button variant="outline" size="sm">
              <FaNodeJs /> NodeJS
              </Button>

              <Button variant="outline" size="sm">
              <SiExpress /> Express
              </Button>

              <Button variant="outline" size="sm">
              <SiPostman /> Postman
              </Button>

              <Button variant="outline" size="sm">
              <SiMongodb /> MongoDB
              </Button>

              <Button variant="outline" size="sm">
             <RiNextjsFill /> Nextjs
              </Button>

        </div>
    </div>
    )
}