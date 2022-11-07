import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Project from "../Project/Project";
import "./Projects.css";
import Box from "@material-ui/core/Box";

export default function Projects() {
	return (
		<Box className="projects" id="project">
			<div className="projectheading">Projects</div>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center">
				<Project />
			</Grid>
		</Box>
	);
}
