import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import { Link } from "react-scroll";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
export default function Profile() {
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="colz">
						<div className="colz-icon">
							<a
								href="https://www.facebook.com/rameshver.tiwari"
								target="_blank"
								rel="noreferrer">
								<FacebookIcon />
							</a>
							<a
								href="https://github.com/rameshver43"
								target="_blank"
								rel="noreferrer">
								<GitHubIcon />
							</a>

							<a
								href="https://www.linkedin.com/in/rameshver-tilwari-4876b3152/"
								target="_blank"
								rel="noreferrer">
								<LinkedInIcon />
							</a>
							<a
								href="https://twitter.com/rameshver43"
								target="_blank"
								rel="noreferrer">
								<TwitterIcon />
							</a>
						</div>
					</div>
					<div className="profile-details-name">
						<span className="primary-text">
							{" "}
							Hello, I am <span className="highlighted-text">Rameshver</span>
						</span>
					</div>
					<div className="profile-details-role">
						<span className="primary-text">
							{" "}
							<h1>
								{" "}
								<Typical
									loop={Infinity}
									steps={[
										"Enthusiastic Dev 🔴",
										1000,
										"Full Stack Developer 🧑‍💻",
										1000,
										"Mern Stack Dev 😎",
										1000,
										"React Dev 😎",
										1000,
										".Net Dev 🎩",
										1000,
									]}
								/>
							</h1>
							<span className="profile-role-tagline">
								Knack of building applications with front and back end
								operations.
							</span>
						</span>
					</div>
					<div className="profile-options">
						<Link to="contact" spy={true} smooth={true}>
							<button className="btn primary-btn">
								{""}
								Hire Me{" "}
							</button>
						</Link>

						<a href="Rameshver_Resume.pdf" download="Rameshver.pdf">
							<button className="btn highlighted-btn">Get Resume</button>
						</a>
					</div>
				</div>
				<div className="profile-picture">
					<div className="profile-picture-background"></div>
				</div>
			</div>
		</div>
	);
}
