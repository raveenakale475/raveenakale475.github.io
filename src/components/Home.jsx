import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Button, Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  const downloadResume = async () => {
    window.open(
      "https://drive.google.com/file/d/1eIv018vU3m9dRGYq7t05cliYzPehIL8I/view?usp=sharing"
    );
  };
  return (
    <div name="Home" className="sm:h-screen w-full pt-24 bg-[#F9F5E7]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full">
          <h2 className="text-5xl sm:text-5xl font-bold tracking-wide">
            I am Raveena <span style={{ color: "#937DC2" }}>Kale</span>
          </h2>
          <p className="py-4 max-w-md tracking-wide text-lg ">
            <span className="text-5xl font-Big"> I am a</span>
            <span className="text-[#937DC2] text-3xl font-Big">
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
            <p className="text-xl">
              I am working on web application using the technologies like
              React,Redux,Redux Thunk and Chakra UI. I like to explore new
              technologies and to solve them in real-life problems.
            </p>
          </p>
          <div>
            <a
              href="/Raveena-Kale-Resume.pdf"
              download={true}
              target="_blank"
              rel="noreferrer"
              onClick={downloadResume}
            >
              <button className="group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#937DC2] cursor-pointer text-xl">
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  {/* <MdOutlineKeyboardArrowRight size={25} className="ml-1" /> */}
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="mb-10 sm:mb-0 w-4/6">
          <img
            src="https://i.ibb.co/5464QJv/Whats-App-Image-2023-02-24-at-11-09-29-PM.jpg"
            alt="my-profile"
            className="rounded-2xl mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
