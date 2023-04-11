import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const Links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Project",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  const downloadResume = async () => {
    window.open(
      "https://drive.google.com/file/d/1eIv018vU3m9dRGYq7t05cliYzPehIL8I/view?usp=sharing"
    );
  };

  return (
    <div className="flex justify-between items-center w-full  h-20 text-black bg-[#F9F5E7] fixed px-2">
      <div className="flex gap-2">
        <h1 className="text-3xl sm:ml-2 cursor-pointer font-semibold">
          <span className="text-[#937DC2]">R</span>
          <span className="text-black">A</span>
          <span className="text-black">V</span>
          <span className="text-black">E</span>
          <span className="text-black">E</span>
          <span className="text-black">N</span>
          <span className="text-[#937DC2]">A</span>
        </h1>
        <h1 className="text-3xl sm:ml-2 cursor-pointer font-semibold">
          <span className="text-[#937DC2]">K</span>
          <span className="text-black">A</span>
          <span className="text-black">L</span>
          <span className="text-[#937DC2]">E</span>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-black hover:scale-105 duration-200 font-semibold text-xl"
          >
            <Link
              to={link}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
        <li className="px-4 cursor-pointer capitalize  text-black hover:scale-105 duration-200 font-semibold text-xl">
          <a
            href="/Raveena-Kale-Resume.pdf"
            download={true}
            target="_blank"
            rel="noreferrer"
            onClick={downloadResume}
          >
            Resume
          </a>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#937DC2] text-black">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={600}
              >
                {link}
              </Link>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200">
            <a
              href="https://drive.google.com/file/d/1eIv018vU3m9dRGYq7t05cliYzPehIL8I/view?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
