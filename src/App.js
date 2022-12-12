import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import GitHubCalendarComponent from "./components/GithubCalender";
import Main from "./components/Main";

function App() {
  return (
    <div style={{ backgroundColor: "#DFF6FF" }}>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <GitHubCalendarComponent/>
      <Contact />
      <SocialLinks />
      {/* <Main/> */}
    </div>
  );
}

export default App;
