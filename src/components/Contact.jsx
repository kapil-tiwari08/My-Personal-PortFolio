/* eslint-disable react/no-unescaped-entities */
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiX,
  SiGmail,
  SiWhatsapp,
} from "react-icons/si";
import kapil from "../assets/kapil.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins'] max-sm:p-3"
      data-aos="fade-up"
    >
      <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-4xl sm:text-5xl text-center mb-8 transition-all duration-300">
        Contact Me
      </h1>

      <div
        className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#111827] dark:to-[#111827] rounded-2xl shadow-xl dark:shadow-none flex flex-col-reverse sm:flex-row justify-between items-center p-7 max-sm:p-4 gap-8 sm:gap-10 transition-all duration-500 ease-in-out"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-[#00040f] dark:text-slate-300 font-semibold text-3xl sm:text-4xl tracking-wide">
            Kapil Tiwari
          </h2>
          <hr className="my-2 border-slate-400 w-[60%] mx-auto sm:mx-0 transition-all" />
          <p className="text-gray-600 dark:text-slate-400 mt-5 leading-7 sm:max-w-[400px]">
            Google DSC Web Dev Lead | Teaching Head - Kaarwaa.N'24 <br />
            Football Team Captain - JEC Football Club <br /> JEC Jabalpur'25
          </p>

          {/* Social Icons */}
          <div className="text-2xl flex justify-center sm:justify-start gap-6 mt-6 text-[#00040f] dark:text-white">
            {[
              { icon: <SiGithub />, link: "https://github.com/kapil-tiwari08" },
              {
                icon: <SiLinkedin />,
                link: "https://www.linkedin.com/in/kapil-tiwari-b029a222a/",
              },
              {
                icon: <SiInstagram />,
                link: "https://www.instagram.com/kapil_tiwari08/",
              },
              {
                icon: <SiX />,
                link: "https://x.com/kapil_tiwari08",
              },
              {
                icon: <SiGmail />,
                link: "mailto:kapilkappy2002@gmail.com",
              },
            ].map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                className="hover:text-sky-400 dark:hover:text-cyan-300 transform hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-8">
            <a
              href="https://drive.google.com/file/d/1K43If9jnvF0AMqiMCab1jBkdObveeZva/view?usp=sharing"
              className="border text-cyan-400 border-cyan-500 px-6 py-3 text-lg rounded hover:bg-cyan-800 hover:text-white transform hover:scale-105 transition duration-300"
            >
              Resume
            </a>
            <a
              href="https://github.com/DhairyaMajmudar/Personal-Portfolio"
              className="border text-cyan-400 border-cyan-400 text-lg px-6 py-3 rounded hover:bg-black hover:text-white transition duration-300 flex items-center gap-2 transform hover:scale-105"
            >
              <SiGithub />
              Star
            </a>
          </div>
        </div>

        {/* Right Section - Image and WhatsApp */}
        <div className="flex flex-col items-center gap-6">
          <img
            src={kapil}
            alt="Kapil Tiwari"
            className="h-[180px] sm:h-[200px] border-[#00040fab] dark:border-slate-300 border-4 rounded-full transition-all duration-300 hover:scale-105"
          />
          <a
            href="https://wa.me/yourwhatsapplink"
            className="border text-cyan-400 border-cyan-400 text-lg px-6 py-3 rounded hover:bg-green-500 hover:text-white transition duration-300 flex items-center gap-2 transform hover:scale-105"
          >
            <SiWhatsapp />
            Text Me
          </a>
        </div>
      </div>

      <p className="text-[#00040f] dark:text-slate-300 mt-6 text-center text-sm tracking-wider">
        Made with 💙 by Kapil Tiwari
      </p>
    </section>
  );
};

export default Contact;
