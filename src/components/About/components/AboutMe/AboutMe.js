import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./AboutMe.css";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		marginBottom: "5px",
		paddingBottom: "5px",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const Educations = [
	{
		type: "UNDERGRADUATE",
		school: "CSE | IIT Jodhpur | 2021 | ",
		marks: "CGPA: 6.75/10",
	},
	{
		type: "INTERMEDIATE",
		school: "JNV Rangareddy | CBSE | 2017 | ",
		marks: "Percentage: 87.4%",
	},
	{
		type: "HIGH SCHOOL",
		school: "JNV Meerut | CBSE | 2015 | ",
		marks: "CGPA: 9.6/10",
	},
];

const Skills =
	"C/C++, Python, C#, JavaScript, HTML, CSS, MySQL, ReactJs, NodeJs, .Net(C#), Android Studio, Visual Studio, Visual Studio Code, Window, Linux";

const Achievements = [
	"Rated 4-stars on CodeChef with 1868 points.",
	"Ranked 59/4300+ globally in September Mega Cook-Off 2019 Division 2 of Codechef.",
	"Batch rank 3rd in Intra college coding contest DHPC.",
	" Qualified till pre-elimination in Snackdown 2018.",
	"Qualified as CS subject expert on chegg.com(online paid question/answersite).",
	"Participated in code.fun.do 2018",
	"Been Member of ”Youth Parliament” which stood first in the 17th National Youth Parliament Competition organized by Ministry(2013-2014).",
];

const Extracurricular = [
	"Volunteer in public charitable foundation DAKSHANA for conducting entrance tests across India every year.",
	"Assistant head in college fest IGNUS IIT Jodhpur 2019.",
];
export default function OutlinedCard() {
	const classes = useStyles();

	return (
		<>
			<Card className={classes.root} variant="outlined">
				<Typography className="tabHeading" component={"span"}>
					Education
				</Typography>
				<CardContent>
					{Educations.map((item, index) => (
						<div key={index} className="bodyData">
							<Typography component={"span"} className="tabbodyHeading">
								{item.type}
							</Typography>
							<Typography component={"span"} className="tabBody">
								{item.school}
							</Typography>
							<Typography component={"span"} className="tabBody">
								{item.marks}
							</Typography>
							{index !== 2 && (
								<div className="space">
								</div>
							)}
						</div>
					))}
				</CardContent>
			</Card>
			<Card className={classes.root} variant="outlined">
				<Typography className="tabHeading" component={"span"}>
					Skills
				</Typography>
				<CardContent>
					<div className="bodyData">
						<Typography component={"span"} className="tabBody">
							{Skills}
						</Typography>
					</div>
				</CardContent>
			</Card>
			<Card className={classes.root} variant="outlined">
				<Typography className="tabHeading" component={"span"}>
					Achievements
				</Typography>
				<CardContent>
					{Achievements.map((item, index) => (
						<div key={index}>
							<Typography component={"span"} className="tabBody">
							• {item}
							</Typography>
						</div>
					))}
				</CardContent>
			</Card>
			<Card className={classes.root} variant="outlined">
				<Typography className="tabHeading" component={"span"}>
					Extracurricular
				</Typography>
				<CardContent>
					{Extracurricular.map((item, index) => (
						<div key={index}>
							<Typography component={"span"} className="tabBody">
							• {item}
							</Typography>
						</div>
					))}
				</CardContent>
			</Card>
		</>
	);
}
