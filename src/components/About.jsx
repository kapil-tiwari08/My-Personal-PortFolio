
import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import Typed from "typed.js";
import computer from "../assets/lottie/computer.json";

const About = () => {
  const roleRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(roleRef.current, {
      strings: [
        "ML ENGINEER",
        "Web Developer",
        "AI ENGINEER",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      typed.destroy(); // Cleanup Typed.js on unmount
    };
  }, []);

  return (
    <>
      <section
        id="about"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 flex max-sm:flex-col gap-5">
          <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am
            </h3>

            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
              Kapil Tiwari, 
            </span>
            <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-900 dark:from-cyan-500 dark:to-slate-200">
              A Professional 
            </span>
            <br />
            <span
              ref={roleRef}
              className="role text-[#00040f] dark:text-white"
            ></span>

            <p className="ABOUT h-[100px] text-xl max-sm:text-[15px] bg-clip-text text-transparent bg-gradient-to-r from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5 pl-1">
              Programming enthusiast who often thinks about developing new
              things for solving real world problems.
            </p>
          </div>

          <Lottie
            animationData={computer}
            loop={true}
            className="max-w-[650px] shadow-xl rounded-xl border border-[#00040f]"
          />
        </div>
      </section>
    </>
  );
};

export default About;
