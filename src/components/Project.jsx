import React from "react";
import Lyst from "../assets/portfolio/Lyst.jpg";
import Hotstar from "../assets/portfolio/hotstar.png";
import Myntra from "../assets/portfolio/Myntra.png";
import RelianceDigital from "../assets/portfolio/RelianceDigital.png";
import GlassCart from "../assets/portfolio/GlassCart.png";
import { FaGithub, FaReact, FaBootstrap } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Bootsrap from "../assets/bootstarp.png";
import Redux from "../assets/redux.png";
import Chakraui from "../assets/chakraui.png";
import Nodejs from "../assets/nodejs.png";
import MongoDb from "../assets/mongodb.png";
import ExpressJs from "../assets/express.png";
import StyledComponent from "../assets/StyledComponent.png";

const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: RelianceDigital,
      github: "https://github.com/RajParmar03/Reliance_digital_clone",
      netlify: "https://russdigital.netlify.app/",
      websiteName: "RelianceDigital Clone",
      des: "RelianceDigital is an E-commerce website to buy Electronics Online.",
      TechStack: [reactImage, Redux, Chakraui, css],
      Area: "Area of responsibility:- cartpage, successpage, coupon code functionality and Responsiveness",
    },
    {
      id: 2,
      src: GlassCart,
      github: "https://github.com/souravpl8092/Lenskart_Clone",
      netlify: "https://masai-glasscart.netlify.app/",
      websiteName: "Lenskart Clone",
      des: "Lenskart is an e-commerce website that sells eyeglasses, contact lenses, and sunglasses.",
      TechStack: [reactImage, Redux, Chakraui, css, Nodejs, ExpressJs, MongoDb],
      Area: "Area of responsibility:- cartpage, coupon code functionality and Responsiveness",
    },
    {
      id: 3,
      src: Lyst,
      github: "https://github.com/raveenakale475/-few-quilt-3078",
      netlify: "https://lyst-rrk.netlify.app/",
      websiteName: "Lyst Clone",
      des: "Lyst is an E-commerce website for online shopping.",
      TechStack: [reactImage, Chakraui, StyledComponent],
      Area: "Area of responsibility:- Individual project",
    },
    {
      id: 4,
      src: Hotstar,
      github: "https://github.com/raveenakale475/Hotstar",
      netlify: "https://hotstar-rrk.netlify.app/",
      websiteName: "Hotstar Clone",
      des: "Hotstar is a website to watch shows, movies, sports and TV channels for entertainment, & more with The Disney Bundle.",
      TechStack: [html, css, javascript],
      Area: "Area of responsibility:- Individual project",
    },
  ];

  return (
    <div name="Project" className=" text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-[#937DC2] ml-5">
            Project
          </p>
          <p className="py-6 font-Big text-lg ml-5">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({
              id,
              src,
              github,
              netlify,
              websiteName,
              des,
              TechStack,
              Area,
            }) => (
              <div
                key={id}
                className="shadow-md shadow-[#937DC2] rounded-lg font-Big text-xl px-5 bg-[#937DC2] text-white"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <h2 className="text-3xl mt-3 text-center">{websiteName}</h2>
                <h2 className="text-xl mt-4 text-center">{des}</h2>
                <div className="flex gap-4 items-center justify-center mt-4 ">
                  {TechStack.map((data, i) => (
                    <img
                      src={data}
                      alt={id}
                      width="12%"
                      className="duration-200 hover:scale-105"
                    />
                  ))}
                </div>
                <h2 className="text-lg mt-3 text-center">{Area}</h2>
                <div className="flex items-center  justify-around">
                  <div>
                    <a
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={40} />
                    </a>
                  </div>
                  <div>
                    <a
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      href={netlify}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SiNetlify size={40} />
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
