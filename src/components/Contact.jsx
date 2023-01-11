import React from "react";
import Main from "./Main";
const Contact = () => {
  return (
    <div name="Contact" className="w-full p-4">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto mb-52">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#937DC2] ml-5">
            Contact
          </p>
          <p className="py-6 ml-5 text-lg">Submit the form below to get in touch with me.</p>
        </div> 

        <Main />
        <div className="flex justify-center items-center mt-5">
          <form
            action="https://getform.io/f/38be7642-d67e-4c78-be46-495df93bf82a"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name Please"
              className="p-2 bg-transparent  rounded-md focus:outline-none border-2 border-[#937DC2]"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your E-mail Please"
              className="p-2 bg-transparent  rounded-md focus:outline-none my-4 border-2 border-[#937DC2]"
            />
            <input
              type="number"
              name="number"
              placeholder="Enter Your PhoneNumber Please"
              className="p-2 bg-transparent  rounded-md focus:outline-none my-3 border-2 border-[#937DC2]"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="10"
              className="p-2 bg-transparent rounded-md focus:outline-none border-2 border-[#937DC2]"
            ></textarea>
            <button className="text-white text-lg bg-gradient-to-b from-cyan-500 to-purple-500  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
