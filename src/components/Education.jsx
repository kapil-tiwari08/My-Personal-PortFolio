import Lottie from "lottie-react";
import educationAnimation from "../assets/lottie/Education.json";
import JEC from "../assets/Jec.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="educationAnimation"
      className="EXPERIENCE p-5 mx-20 mb-10 min-h-screen font-['Poppins'] max-sm:p-3 max-sm:mx-4"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-3xl">
          Education
        </h1>

        <div
          className="EDUCATION flex gap-10 justify-between flex-row max-sm:flex-col max-sm:items-center"
          data-aos="fade-right"
        >
          {/* Lottie Animation (Left Side) */}
          <div className="max-w-[500px] w-full max-sm:max-w-[300px] max-sm:mb-5 shadow-xl rounded-xl border border-[#00040f]">
            <Lottie animationData={educationAnimation} loop={true} />
          </div>

          {/* College Details (Right Side) */}
          <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-4 max-sm:mt-2">
            <div className="flex gap-5 max-sm:flex-col max-sm:items-center text-left">
              <img
                src={JEC}
                alt="JEC"
                className="w-[90px] h-[90px] max-sm:w-[70px] max-sm:h-[70px]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl max-sm:text-[18px] tracking-wide">
                Jabalpur Engineering College, [JEC] <br />  Madhya Pradesh
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-3 text-left pl-4 max-sm:pl-2">
              <h3 className="capitalize text-slate-800 dark:text-slate-300 text-xl max-sm:text-base">
                Bachelor Of Technology
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-lg max-sm:text-sm leading-7">
                November 2021 - May 2025
              </p>
              <p className="capitalize text-gray-500 dark:text-slate-500 text-lg max-sm:text-sm leading-7">
                Artificial Intelligence And Data Science
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
