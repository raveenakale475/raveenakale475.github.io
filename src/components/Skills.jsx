import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import redux from "../assets/redux.png";
import github from "../assets/github.png";
import chakraui from "../assets/chakraui.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-cyan-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-500",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-black",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: chakraui,
      title: "Chakra UI",
      style: "shadow-teal-700",
    },
    {
      id: 10,
      src: express,
      title: "Express JS",
      style: "shadow-yellow-400",
    },
    {
      id: 11,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-green-400",
    },
    {
      id: 12,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-700",
    },
  ];

  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-white to-white h-screen sm:mt-96 md:-mt-1 lg:-mt-4"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black mt-20">
        <div>
          <p className="text-4xl font-bold border-b-4 border-[#937DC2] p-2 inline font-Big">
            Skills
          </p>
          <p className="py-6 font-small">
            These are the technologies I have worked with
          </p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
