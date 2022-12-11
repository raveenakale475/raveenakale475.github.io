import React from "react";
import Lyst from "../assets/portfolio/Lyst.jpg";
import airtable from "../assets/portfolio/airtable.png";
import Myntra from "../assets/portfolio/Myntra.png";
import Todo from "../assets/portfolio/Todo.png";
import { FaGithub, FaReact, FaBootstrap } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Bootsrap from "../assets/bootstarp.png";
import Redux from "../assets/redux.png";

const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: airtable,
      github: "https://github.com/raveenakale475/Airtable",
      netlify: "https://airtable-rrk.netlify.app/",
      websiteName: "Airtable Clone",
      des: "Airtable is a website to low-code platform and for building collaborative apps..",
      TechStack: [html, css, javascript, Bootsrap],
    },
    {
      id: 2,
      src: Myntra,
      github: "https://github.com/sandeshjadhav5/exotic-tail-7975",
      netlify: "https://myntraclonemasai.netlify.app/",
      websiteName: "Myntra Clone",
      des: "Myntra is an E-commerce website popular for clothing and online shopping all materials which needed in day to day life.",
      TechStack: [html, css, javascript, Bootsrap],
    },
    {
      id: 3,
      src: Lyst,
      github: "https://github.com/raveenakale475/-few-quilt-3078",
      netlify: "https://lyst-rrk.netlify.app/",
      websiteName: "Lyst Clone",
      des: "Lyst is an E-commerce website for online shopping.",
      TechStack: [html, css, javascript, reactImage, Redux],
    },
    {
      id: 4,
      src: Todo,
      github: "https://github.com/raveenakale475/Todo-App",
      netlify: "https://todoapp-rrk.netlify.app/",
      websiteName: "Todo App",
      des: "It is an website for task management.",
      TechStack: [html, css, javascript, reactImage, Redux],
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
            ({ id, src, github, netlify, websiteName, des, TechStack }) => (
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
                <div className="flex items-center  justify-around">
                  <div>
                    <a
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      href={github}
                      target="_blank"
                    >
                      <FaGithub size={40} />
                    </a>
                  </div>
                  <div>
                    <a
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      href={netlify}
                      target="_blank"
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
