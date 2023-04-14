import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import GitHubCalendarComponent from "./components/GithubCalender";
import { BsHeartFill } from "react-icons/bs";
import { FiChevronsUp } from "react-icons/fi";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <GitHubCalendarComponent />
      <Contact />
      <SocialLinks />
      <div
        style={{
          background: "#F9F5E7",
          padding: "15px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            fontSize: "25px",
            display: "flex",
            gap: "7px",
            justifyContent: "center",
            width: "95%",
          }}
        >
          Designed and Build With {<BsHeartFill color="#937DC2" size={30} />} By
          Raveena Kale 2023 All Rights Reserved.
        </h1>
        <div
          className="mr-5 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          {<FiChevronsUp size={50} />}
        </div>
      </div>
    </div>
  );
}

export default App;
// style={{ backgroundColor: "#DFF6FF" }}
