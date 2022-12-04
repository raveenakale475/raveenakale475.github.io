import React from "react";
import Myntra from "../assets/portfolio/Myntra.png";
import Lyst from "../assets/portfolio/Lyst.jpg";
import Todo from "../assets/portfolio/Todo.png";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: Myntra,
      github: "https://github.com/sandeshjadhav5/exotic-tail-7975",
      live: "https://myntraclonemasai.netlify.app/",
    },
    {
      id: 2,
      src: Lyst,
      github: "https://github.com/raveenakale475/-few-quilt-3078",
      live: "https://lyst-rrk.netlify.app/",
    },
    {
      id: 3,
      src: Todo,
      github: "https://github.com/raveenakale475/Todo-App",
      live: "https://todoapp-rrk.netlify.app/",
    },
  ];

  return (
    <div
      name="Project"
      className="bg-gradient-to-b from-white to-white w-full text-black md:h-screen md:-mt-20 lg:-mt-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-[#937DC2] font-Big">
            Project
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, github, live }) => (
            <div key={id} className="shadow-md shadow-[#937DC2] rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href={live}
                  target={"_blank"}
                >
                  <SiNetlify size={40} />
                </a>
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  href={github}
                  target={"_blank"}
                >
                  <FaGithub size={40} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
