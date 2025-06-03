"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


import {
  SIH,
  AI,
  Sports,
  FIIT,
  Karwaan,
  Mass,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Mass}
              title="MASS Technology Pune"
              subtitle="Intern"
              date="June 2022 - July 2022"
              para="- Completed a 2-month internship at MASS Technology, Pune, where I gained hands-on experience in software development and project management."
            />
            <Exp_prop
              img={Karwaan}
              title="Kaarwaan welfare society"
              subtitle="Teaching Head"
              date="January 2024 - April 2025"
              para="- Leading a team of volunteers to teach underprivileged children, focusing on enhancing their academic skills and overall development."
            />
           
            
            <Exp_prop
              img={FIIT}
              title="FITT Program by IIT DELHI"
              subtitle="Participent"
              date="January 2024 - March 2024"
              para="- Participated in the FITT program by IIT Delhi, where I learned about IoT,AIML and innovation in technology also built a project on IoT."
            />
            <Exp_prop
              img={Sports}
              title="Sports Club, JEC "
              subtitle="Team Member"
              date="June 2023 - April 2025"
              para="- Collaborated with the Sports Club to organize and promote various sports events, enhancing student engagement and participation."
            />
            <Exp_prop
              img={AI}
              title="A Cube Club "
              subtitle="A Cube Team Member"
              date="June 2023 - April 2025"
              para="- managed the club's social media accounts, creating engaging content and increasing online presence."
            />
            <Exp_prop
              img={SIH}
              title="Smart India Hackathon 2024, JEC JABALPUR"
              subtitle="participant"
              date="SEPTEMBER 2024"
              para="- Participated in Smart India Hackathon 2024, JEC JABALPUR, where we developed a web application for the problem statement."
            />
            
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
