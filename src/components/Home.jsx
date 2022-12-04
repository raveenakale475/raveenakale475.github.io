import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full font-Big">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full w-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full  w-3/6">
          <h2 className="sm:text-5xl font-bold text-black md:mt-5 font-Big sm:mt-96 lg:text-7xl">
            I am <span>Raveena Kale</span>
          </h2>
          <p className="text-black py-4 max-w-md">
            <span className="text-5xl font-Big"> I am a</span>
            <span className="text-red-600 text-4xl font-Big">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer",
                    "MERN Stack Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>

          <div>
            <Link
              to="Project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-700 to-cyan-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-2/6">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:w-full md:mt-10 ml-10 sm:mt-20 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
