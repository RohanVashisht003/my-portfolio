import "./App.css";
import About from "./components/About";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Experience />
      <Portfolio />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
