import Project_prop from "./Project_prop";
import {
  tictactoe,
  memory,
  weather,
  meme,
  todo,
  voicemessage,
  passwordstrength,
  chair,
  gallary,
  humanresorce,
  seo,
  list,
  doctorvisit,
  grocerycart,
  shopping,
  interview,
  Portfolio,
  WellBeing,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  SiExpress,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
} from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { FaStripe } from "react-icons/fa6";
import { em } from "framer-motion/client";



const Projects = () => {
  const [activeTab, setActiveTab] = useState("intermediate");

  useEffect(() => {
    AOS.init();
  }, []);

  const tabs = [
    { id: "basic", title: "Basic Projects" },
    { id: "intermediate", title: "Intermediate Projects" },
    { id: "advanced", title: "Advanced Projects" },
  ];

  return (
    <section
      id="projects"
      className="px-5 lg:px-20 py-10 min-h-screen font-['Poppins'] bg-white dark:bg-[#0f172a]"
    >
      <div className="WRAPPER" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-10 max-sm:text-4xl">
          Projects
        </h1>

        {/* Tabs - Responsive */}
        <div className="mb-10" data-aos="zoom-in">
          {/* Desktop View */}
          <div className="hidden sm:flex flex-wrap justify-center gap-6 text-xl font-semibold">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:shadow-md hover:scale-105 
                  ${
                    activeTab === tab.id
                      ? "bg-violet-700 text-white shadow-lg scale-105"
                      : "hover:bg-black dark:bg-gray-700 text-gray-800 dark:text-white"
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Mobile View */}
          <div className="sm:hidden flex justify-center">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="px-4 py-2 rounded-lg text-base font-medium dark:bg-gray-700 bg-gray-200 dark:text-white text-black focus:outline-none shadow-md"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Sections */}
        <div
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 bg-transparent transition-all duration-300 rounded-lg cursor-pointer hover:text-white"
          style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
          data-aos="fade-up"
        >
          {/* Basic */}
          {activeTab === "basic" && (
            <>
              <Project_prop
                title="Responsive BMI Calculator"
                para="A simple BMI calculator which calculates the BMI of a person based on their age,  height and weight"
                img={WellBeing}
                link="https://responsive-bmi-calulator-master.vercel.app"
                github_link="https://github.com/kapil-tiwari08/responsive_bmi_calulator-master"
                html5={
                  <Tooltip title="HTML 5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                css3={
                  <Tooltip title="CSS 3" arrow>
                    <IconButton>
                      <SiCss3 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="Text to Voice Converter"
                para="A simple text to voice converter which converts the text into voice"
                img={voicemessage}
                link="https://text-to-voice-converter-master.vercel.app"
                github_link="https://github.com/kapil-tiwari08/text_to_voice_converter-master"
                html5={
                  <Tooltip title="HTML 5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                css3={
                  <Tooltip title="CSS 3" arrow>
                    <IconButton>
                      <SiCss3 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="Employee Management System"
                para="A simple employee management system which manages the employees of a company"
                img={humanresorce}
                link="https://responsive-bmi-calulator-master.vercel.app"
                github_link="https://employee-management-system-master-zeta.vercel.app"
                html5={
                  <Tooltip title="HTML 5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                css3={
                  <Tooltip title="CSS 3" arrow>
                    <IconButton>
                      <SiCss3 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="Strong Password Validator"
                para="A simple strong password validator which validates the password based on the criteria"
                img={passwordstrength}
                link="https://strong-password-validation-master.vercel.app"
                github_link="https://github.com/kapil-tiwari08/strong_password_validation-master"
                html5={
                  <Tooltip title="HTML 5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                css3={
                  <Tooltip title="CSS 3" arrow>
                    <IconButton>
                      <SiCss3 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="Modern Chair"
                para="A Modern chair is a simple website which shows the diffrent types of chairs based on color"
                img={chair}
                link="https://09-modern-chair.vercel.app"
                github_link="https://github.com/kapil-tiwari08/09---Modern-Chair"
                html5={
                  <Tooltip title="HTML 5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                css3={
                  <Tooltip title="CSS 3" arrow>
                    <IconButton>
                      <SiCss3 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="Image Gallery"
                para="A simple image gallery which shows the images based on hover effect"
                img={gallary}
                link="https://05-image-gallery-eight.vercel.app"
                github_link="https://github.com/kapil-tiwari08/05---Image-Gallery"
                html5={
                  <Tooltip title="HTML 5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                css3={
                  <Tooltip title="CSS 3" arrow>
                    <IconButton>
                      <SiCss3 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
            </>
          )}

          {/* Intermediate */}
          {activeTab === "intermediate" && (
            <>
              <Project_prop
                title="Memory Game"
                para="A simple memory game which tests the memory of a person by showing the cards and asking to match them"
                img={memory}
                link="https://memory-game-using-reactjs.vercel.app"
                github_link="https://github.com/kapil-tiwari08/Memory-Game-using-Reactjs"
                html5={
                  <Tooltip title="HTML5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                tailwindcss={
                  <Tooltip title="TailWind CSS" arrow>
                    <IconButton>
                      <SiTailwindcss className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                react={
                  <Tooltip title="React js" arrow>
                    <IconButton>
                      <SiReact className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                vite={
                  <Tooltip title="Vite" arrow>
                    <IconButton>
                      <SiVite className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="TIC-TAC-TOE Game"
                para="A simple tic-tac-toe game which allows two players to play the game"
                img={tictactoe}
                link="https://tic-tac-toe-game-using-react-js-theta.vercel.app"
                github_link="https://github.com/kapil-tiwari08/TIC-TAC-TOE--Game-using-ReactJs"
                html5={
                  <Tooltip title="HTML5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                tailwindcss={
                  <Tooltip title="TailWind CSS" arrow>
                    <IconButton>
                      <SiTailwindcss className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                react={
                  <Tooltip title="React js" arrow>
                    <IconButton>
                      <SiReact className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                vite={
                  <Tooltip title="Vite" arrow>
                    <IconButton>
                      <SiVite className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="Weather App"
                para="A simple weather app which shows the weather of a city based on the city name"
                img={weather}
                link="https://16-weather-app.vercel.app"
                github_link="https://github.com/kapil-tiwari08/16---Weather--App"
                html5={
                  <Tooltip title="HTML5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                tailwindcss={
                  <Tooltip title="TailWind CSS" arrow>
                    <IconButton>
                      <SiTailwindcss className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                react={
                  <Tooltip title="React js" arrow>
                    <IconButton>
                      <SiReact className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                vite={
                  <Tooltip title="Vite" arrow>
                    <IconButton>
                      <SiVite className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="GitHub User Search"
                para="A simple GitHub user search app which allows you to search for GitHub users and see their profiles"
                img={seo}
                link="https://git-hub-user-detective-using-html-c.vercel.app"
                github_link="https://github.com/kapil-tiwari08/GitHub-User-Detective-Using-Html-Css-Javascript"
                html5={
                  <Tooltip title="HTML5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                tailwindcss={
                  <Tooltip title="TailWind CSS" arrow>
                    <IconButton>
                      <SiTailwindcss className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                react={
                  <Tooltip title="React js" arrow>
                    <IconButton>
                      <SiReact className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                vite={
                  <Tooltip title="Vite" arrow>
                    <IconButton>
                      <SiVite className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="Random Meme Generator"
                para="A simple random meme generator which generates random memes from the internet"
                img={meme}
                link="https://random-meme-web-app-using-react.vercel.app"
                github_link="https://github.com/kapil-tiwari08/Random-Meme-Generator-web-app-using-react"
                html5={
                  <Tooltip title="HTML5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                tailwindcss={
                  <Tooltip title="TailWind CSS" arrow>
                    <IconButton>
                      <SiTailwindcss className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                react={
                  <Tooltip title="React js" arrow>
                    <IconButton>
                      <SiReact className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                vite={
                  <Tooltip title="Vite" arrow>
                    <IconButton>
                      <SiVite className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="To-Do List"
                para="A simple To-Do List app which allows you to add, delete and update your tasks"
                img={todo}
                link="https://to-do-web-app-using-reactjs.vercel.app"
                github_link="https://github.com/kapil-tiwari08/TO-DO-Web-App-using-Reactjs"
                html5={
                  <Tooltip title="HTML5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                tailwindcss={
                  <Tooltip title="TailWind CSS" arrow>
                    <IconButton>
                      <SiTailwindcss className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                react={
                  <Tooltip title="React js" arrow>
                    <IconButton>
                      <SiReact className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                vite={
                  <Tooltip title="Vite" arrow>
                    <IconButton>
                      <SiVite className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
            </>
          )}

          {/* Advanced */}
          {activeTab === "advanced" && (
            <>
              <Project_prop
                title="Green Cart - Grocery Store Full Stack Webapp"
                para="Green Cart is a grocery store website which allows you to buy groceries vegetables and fruits online"
                img={grocerycart}
                link="https://greencart-fullstack-project1-a39u.vercel.app"
                github_link="https://github.com/kapil-tiwari08/Greencart-fullstack-project1"
                html5={
                  <Tooltip title="HTML5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                tailwindcss={
                  <Tooltip title="TailWind CSS" arrow>
                    <IconButton>
                      <SiTailwindcss className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                react={
                  <Tooltip title="React js" arrow>
                    <IconButton>
                      <SiReact className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                mongodb={
                  <Tooltip title="Mongo Db" arrow>
                    <IconButton>
                      <SiMongodb className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                express={
                  <Tooltip title="Express js" arrow>
                    <IconButton>
                      <SiExpress className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                nodejs={
                  <Tooltip title="Node js" arrow>
                    <IconButton>
                      <RiNodejsFill className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                stripe={
                  <Tooltip title="Stripe" arrow>
                    <IconButton>
                      <FaStripe className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                vite={
                  <Tooltip title="Vite" arrow>
                    <IconButton>
                      <SiVite className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="Prescripto- Doctor Appointment Booking System Webapp"
                para="Prescripto is a doctor appointment booking system which allows you to book appointments with doctors online"
                img={doctorvisit}
                link="https://prescripto-full-stack-doctor-appoin-ebon.vercel.app"
                github_link="https://github.com/kapil-tiwari08/prescripto_full-stack_doctor_appointment_app"
                html5={
                  <Tooltip title="HTML5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                tailwindcss={
                  <Tooltip title="TailWind CSS" arrow>
                    <IconButton>
                      <SiTailwindcss className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                react={
                  <Tooltip title="React js" arrow>
                    <IconButton>
                      <SiReact className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                mongodb={
                  <Tooltip title="Mongo Db" arrow>
                    <IconButton>
                      <SiMongodb className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                express={
                  <Tooltip title="Express js" arrow>
                    <IconButton>
                      <SiExpress className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                nodejs={
                  <Tooltip title="Node js" arrow>
                    <IconButton>
                      <RiNodejsFill className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                stripe={
                  <Tooltip title="Stripe" arrow>
                    <IconButton>
                      <FaStripe className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                vite={
                  <Tooltip title="Vite" arrow>
                    <IconButton>
                      <SiVite className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="AI Based Mock Interview Platform"
                para="AI Based Mock Interview Platform is a web application which allows you to practice mock interviews with AI"
                img={interview}
                link="https://ai-mock-interview-using-typescript.vercel.app"
                github_link="https://github.com/kapil-tiwari08/Ai-Mock-Interview-Using-Typescript-Reactjs"
                html5={
                  <Tooltip title="HTML5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                tailwindcss={
                  <Tooltip title="TailWind CSS" arrow>
                    <IconButton>
                      <SiTailwindcss className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                react={
                  <Tooltip title="React js" arrow>
                    <IconButton>
                      <SiReact className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                firebase={
                  <Tooltip title="Mongo Db" arrow>
                    <IconButton>
                      <SiFirebase className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                nodejs={
                  <Tooltip title="Node js" arrow>
                    <IconButton>
                      <RiNodejsFill className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                vite={
                  <Tooltip title="Vite" arrow>
                    <IconButton>
                      <SiVite className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
              <Project_prop
                title="Forever- E-commerce Full Stack Webapp"
                para="Forever is an e-commerce website which allows you to buy products online"
                img={shopping}
                link="https://forever-full-stack-e-commerce-web-a-umber.vercel.app"
                github_link="https://github.com/kapil-tiwari08/forever_full_stack_e-commerce-web-app"
                html5={
                  <Tooltip title="HTML5" arrow>
                    <IconButton>
                      <SiHtml5 className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                javascript={
                  <Tooltip title="JavaScript" arrow>
                    <IconButton>
                      <SiJavascript className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                tailwindcss={
                  <Tooltip title="TailWind CSS" arrow>
                    <IconButton>
                      <SiTailwindcss className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                react={
                  <Tooltip title="React js" arrow>
                    <IconButton>
                      <SiReact className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                mongodb={
                  <Tooltip title="Mongo Db" arrow>
                    <IconButton>
                      <SiMongodb className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                express={
                  <Tooltip title="Express js" arrow>
                    <IconButton>
                      <SiExpress className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                nodejs={
                  <Tooltip title="Node js" arrow>
                    <IconButton>
                      <RiNodejsFill className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                stripe={
                  <Tooltip title="Stripe" arrow>
                    <IconButton>
                      <FaStripe className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
                vite={
                  <Tooltip title="Vite" arrow>
                    <IconButton>
                      <SiVite className="dark:text-slate-200 text-black" />
                    </IconButton>
                  </Tooltip>
                }
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
