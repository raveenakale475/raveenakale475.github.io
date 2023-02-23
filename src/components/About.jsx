import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full mt-0 md:mt-5 px-8">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#937DC2]">
            About Me
          </p>
        </div>
        <p className="tracking-wide text-lg "><br/>
        * Hello! My name is Raveena Kale, I enjoy building things that are live on the internet.<br /><br/>
        * I'm a passionate Developer, with strong administrative and communication skills, good attention to detail, and the ability to write efficient code using MERN Stack.
          <br /><br/>
          * My interest in web development started last year when I was trying to build things on the web, which taught me a lot about HTML and CSS.<br/><br/>
          * Fast Forwarding to today, I built many web applications and projects. I learned a great deal about teamwork, leadership, and communication. After months of rigorous training, I am looking for an opportunity as a full-stack web developer.<br/>
        </p>
      </div>
    </div>
  );
};

export default About;
