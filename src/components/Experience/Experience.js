import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "./Experience.css";

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

const Experiences = [
	{
		companyName: "Wipro Limited",
		details: [
			"Implemented automation scripts using BDD framework with specFlow for CRM Banking Application.",
			"Completed training on CRM and Power‐Platform.",
			"Technologies used C#, SpecFlow and BDD.",
		],
	},
	{
		companyName: "Oyelazy - Internship",
		details: [
			"Work on the front‐end Part of Android Application.",
			"Work on the front‐end part of the website",
			"Technologies used React, React‐native, JavaScript and Material‐UI React.",
		],
	},
];
export default function Experience() {
	const classes = useStyles();

	return (
		<Paper className="experience" id="experience">
			<div className="experienceHeading">Experience</div>
			{Experiences.map((item, index) => 
            (
                <>
				<Card  key={index} className={classes.root} variant="outlined">
					<Typography className="tabHeading" component={"span"}>
						{item.companyName}
					</Typography>
					<CardContent>
						{item.details.map((value, index) => (
							<div key={index}>
								<Typography component={"span"} className="tabBody">
									• {value}
								</Typography>
							</div>
						))}
					</CardContent>
				</Card>
                <br/>
                </>
			))}
		</Paper>
	);
}
