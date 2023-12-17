
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
const Skills = () => {
    return (
        <div >

            <h1 className="text-center text-5xl font-bold p-10">Skills</h1>
            <marquee >
                <div className="flex gap-3" >
                <div className="w-40 h-20 flex justify-center items-center text-2xl border-2 border-white">HTML</div>
                <div className="w-40 h-20 flex justify-center items-center text-2xl border-2 border-white">css</div>
                <div className="w-40 h-20 flex justify-center items-center text-2xl border-2 border-white">javascript</div>
                <div className="w-40 h-20 flex justify-center items-center text-2xl border-2 border-white">react</div>
                <div className="w-40 h-20 flex justify-center items-center text-2xl border-2 border-white">firebase</div>
                <div className="w-40 h-20 flex justify-center items-center text-2xl border-2 border-white">tailwind</div>
                </div>
            </marquee>

            <div className="p-20 flex gap-5 justify-center items-center  md:flex-row flex-col ">
            <FaHtml5 className="h-40 w-40" />
            <FaCss3Alt  className="h-40 w-40"/>
            <IoLogoJavascript className="h-40 w-40" />
            <FaReact className="h-40 w-40"/>
            <IoLogoFirebase className="h-40 w-40" />
            <SiTailwindcss className="h-40 w-40" />
       
            </div>
        </div>
    );
};

export default Skills;