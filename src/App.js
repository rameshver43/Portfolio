import "./App.css";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Profile />
			<About />
			<Experience />
			<Projects />
			<Contact />
			<Button className="backtotop" variant="contained" color="primary">
				<Link to="Navbar" spy={true} smooth={true} offset={0} duration={0}>
					<span class="navFooterBackToTopText"> Back to top </span>
				</Link>
			</Button>
			<Footer />
		</div>
	);
}

export default App;
