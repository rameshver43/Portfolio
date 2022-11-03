import "./App.css";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
import LaptopModel from "./components/contactModel/contactlaptop";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Profile />
			<About />
			<Experience />
			<Projects />
			<button className="backtotop" variant="contained" color="primary">
				<Link to="Navbar" spy={true} smooth={true} offset={0} duration={0}>
					<span className="navFooterBackToTopText"> Back to top </span>
				</Link>
			</button>
			<LaptopModel />
			<Footer />
		</div>
	);
}

export default App;
