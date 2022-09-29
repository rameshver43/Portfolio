
import "./App.css";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
function App() {
  return (
    <div
      className="App"
    >
      <Navbar/>
      <Profile/>
      <About />
     <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
