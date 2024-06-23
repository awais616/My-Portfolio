import React from "react";
import { bannerimg } from "../../assets/index";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { TbBrandNextjs } from "react-icons/tb";
import {
  FaFacebookF,
  FaTwitter,
  FaReact,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Front end Developer", "Professional Coder", "UI Designer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="w-full pt-10 order-2 md:order-1 pb-20 flex flex-col gap-10 lgl:gap-0 lgl:flex-row items-center border-b-[1px] border-b-black
    font-titleFont  "
    >
      <div className="w-full lgl:w-1/2 lgl:px-[50px] order-2 md:order-1 flex flex-col gap-20  ">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal ">WELCOME TO MY PROFILE</h4>
          <h1 className="text-5xl font-bold text-white">
            Hi, I'm
            <span className="text-designColor  Capitaliza">
              {" "}
              Muhammad Awais
            </span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base text-justify font-bodyFont leading-6 tracking-wide pt-10">
            A highly experienced Mid Level Frontend Developer with 1 year of
            expertise in developing user-friendly, adaptive and responsive
            websites with optimized cross-browser compatibility and runtime
            performance. Spearheaded projects to strengthen the brand by
            creating engaging web layouts for destination websites.
          </p>
        </div>
        <div className="flex flex-col lgl:flex-row gap-6 xl:gap-0 justify-between">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <a
                  href="https://www.facebook.com/shootergang.shootergang/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <a
                  href="https://www.linkedin.com/in/m-awais-dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              best skills on
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiJavascript />
              </span>
              <span className="bannerIcon">
              <TbBrandNextjs />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2 order-1 md:order-2 lgl:flex justify-center items-center ">
        <img
          className="w-[380px] order-1 h-[520px] lgl:w-[480px] lgl:h-[600px] z-10"
          src={bannerimg}
          alt="bannerimg"
        />
      </div>
    </section>
  );
};

export default Banner;
