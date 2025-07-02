import Link from "next/link";
import { ThemeToggle } from "../app/theme-toggle";
import { Button } from "./ui/button";

export default function NavigationBar(){
    return(
        <nav className="p-4 mt-40 w-120 mx-auto flex justify-center items-center border dark:border-gray-200">
            <div className="container w-100 mx-auto flex justify-between items-center">
                <div className="text-lg font-semibold">
                    
                       <Button variant={"outline"} size={"icon"} className="rounded-full" >
                        <Link href="/" className="dark:text-white">N</Link>
                     </Button>
                
                </div>
                <ul className="flex space-x-4">
                    <li><a href="/projects" className="dark:text-white">Projects</a></li>
                    <li><a href="/about" className="dark:text-white">About</a></li>
                    <li><a href="/blog" className="dark:text-white">Blog</a></li>
                </ul>

                   <div className="">
                       <ThemeToggle />
                    </div>

            </div>
        </nav>
    );
}