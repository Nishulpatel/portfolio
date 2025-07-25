import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaRegFilePdf } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

export const socialLinks = {
  Resume: {
    href: "https://drive.google.com/file/d/1ytfjMyzGBfJT3P9m21NF0Xwgu9e871Bs/view?usp=sharing",
    icon: FaRegFilePdf,
  },
  Twitter: {
    href: "https://twitter.com/yourhandle",
    icon: BsTwitterX,
  },
  GitHub: {
    href: "https://github.com/yourhandle",
    icon: FiGithub,
  },
  LinkedIn: {
    href: "https://linkedin.com/in/yourhandle",
    icon: FaLinkedinIn,
  },
  LeetCode: {
    href: "https://leetcode.com/yourhandle",
    icon: SiLeetcode,
  },
};
