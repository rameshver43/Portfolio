import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import { useContext } from "react";
import { themeContext } from "./Context";
import Divider from '@material-ui/core/Divider';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Home />
      <Services />
      <Projects/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;