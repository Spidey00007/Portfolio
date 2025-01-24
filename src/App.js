import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import  Skills  from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className= "overflow-y-auto overflow-x-hidden scrollbar-hide scroll-m-80 h-screen w-screen scroll-smooth">
      <Navbar/>
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
