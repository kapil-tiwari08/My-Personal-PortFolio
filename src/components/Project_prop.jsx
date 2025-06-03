/* eslint-disable react/prop-types */
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const Project_prop = (props) => {
  return (
    <div className="border-[#00040f] shadow-xl bg-[#e1e1e1] dark:bg-transparent dark:border-white border rounded-xl h-[370px] max-sm:h-[470px] p-7 max-sm:p-3 hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C] flex flex-col justify-between transition-all duration-300 overflow-hidden">
      
      {/* Header Section */}
      <div className="HEADER">
        <div className="HEADING flex gap-7 max-sm:gap-2">
          <div className="p-3">
            <img
              src={props.img}
              alt=""
              className="max-w-[100px] rounded-full border border-[#00040f]"
            />
          </div>
          <div className="p-3">
            <h1 className="font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r p-1 from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-xl mb-1 max-sm:text-lg">
              {props.title}
            </h1>
            <h3 className="text-[#00040f] dark:text-slate-200 p-1">Tech Stack</h3>
            <div className="flex flex-wrap gap-0 p-1">
              {props.html5}
              {props.css3}
              {props.javascript}
              {props.tailwindcss}
              {props.react}
              {props.nodejs}
              {props.express} 
              {props.mongodb}
              {props.stripe}
              {props.vite}
              {props.firebase}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-500  text-sm px-3 max-sm:px-1">{props.para}</p>

      {/* Icons with Labels */}
      <div className="flex gap-6 flex-wrap items-center text-[#00040f] dark:text-slate-200 px-3 py-2 text-base mt-4">
        <a
          href={props.github_link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <SiGithub className="text-2xl" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <SlLink className="text-2xl" />
          <span className="text-sm font-medium">Live Demo</span>
        </a>
      </div>
    </div>
  );
};

export default Project_prop;
