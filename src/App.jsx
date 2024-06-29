import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Copyright from "./Components/Copyright/Copyright";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Copyright />
    </div>
  );
};

export default App;
