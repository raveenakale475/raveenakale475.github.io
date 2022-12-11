import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="Home" className="sm:h-screen w-full pt-24">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full">
          <h2 className="text-5xl sm:text-5xl font-bold tracking-wide">
          I am Raveena <span style={{ color: "#937DC2" }}>Kale</span>
          </h2>
          <p className="py-4 max-w-md tracking-wide text-lg ">
          <span className="text-5xl font-Big"> I am a</span>
            <span className="text-red-600 text-3xl font-Big">
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
            </span> Analytical and detail-oriented aspiring Full Stack web Developer. Worked through 1200+ hours of Bootcamp structure.
          </p>
          <div>
            <Link
              to="Project"
              smooth
              duration={500}
              className="group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-10 sm:mb-0 w-4/6">
          <img
            src={
              "https://media-exp1.licdn.com/dms/image/D4D03AQFylbCZmCtB3Q/profile-displayphoto-shrink_400_400/0/1667745222574?e=1675900800&v=beta&t=eW5ES4H3O2ilLVyBTFjTl1ZpfrJO1DH3IQ7bKM6Vgr8"
            }
            alt="my-profile"
            className="rounded-2xl mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
