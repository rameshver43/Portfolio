import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Typography from "@material-ui/core/Typography";
export default function Footer() {
	return (
		<div className="box">
			<div className="container">
				<div className="row">
					<div className="footercolumn">
						<Typography variant="h5" className="footerheading">
							Coding Profile
						</Typography>
						<br />
						<ul className="footerul">
							<li className="footerlist">
								<a
									className="footerlink"
									href="https://www.codechef.com/users/rameshver43"
									target="_blank"
									rel="noreferrer">
									Codechef
								</a>
							</li>

							<li className="footerlist">
								<a
									className="footerlink"
									href="https://www.hackerrank.com/rameshver_1?hr_r=1"
									target="_blank"
									rel="noreferrer">
									HackerRank
								</a>
							</li>
						</ul>
					</div>
					<div className="footerspace"></div>
					<div className="footercolumn">
						<Typography variant="h5" className="footerheading">
							Coding Platform
						</Typography>
						<br />
						<ul className="footerul">
							<li className="footerlist">
								<a
									className="footerlink"
									href="https://www.codechef.com/"
									target="_blank"
									rel="noreferrer">
									Codechef
								</a>
							</li>
							<li className="footerlist">
								<a
									className="footerlink"
									href="https://leetcode.com/"
									target="_blank"
									rel="noreferrer">
									LeetCode
								</a>
							</li>
							<li className="footerlist">
								<a
									className="footerlink"
									href="https://www.hackerrank.com/"
									target="_blank"
									rel="noreferrer">
									HackerRank
								</a>
							</li>
							<li className="footerlist">
								<a
									className="footerlink"
									href="https://www.hackerearth.com/"
									target="_blank"
									rel="noreferrer">
									HackerEarth
								</a>
							</li>
						</ul>
					</div>
					<div className="footerspace"></div>
					<div className="footercolumn">
						<Typography variant="h5" className="footerheading">
							Social Media
						</Typography>
						<br />
						<ul className="footerul">
							<li className="footerlist">
								<a
									className="footerlink"
									href="https://www.facebook.com/rameshver.tiwari"
									target="_blank"
									rel="noreferrer">
									<FacebookIcon /> Facebook
								</a>
							</li>
							<li className="footerlist">
								<a
									className="footerlink"
									href="https://github.com/rameshver43"
									target="_blank"
									rel="noreferrer">
									<GitHubIcon /> Github
								</a>
							</li>
							<li className="footerlist">
								<a
									className="footerlink"
									href="https://www.linkedin.com/in/rameshver-tilwari-4876b3152/"
									target="_blank"
									rel="noreferrer">
									<LinkedInIcon />
									Linkedin
								</a>
							</li>
							<li className="footerlist">
								<a
									className="footerlink"
									href="https://twitter.com/rameshver43"
									target="_blank"
									rel="noreferrer">
									<TwitterIcon /> Twitter
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
