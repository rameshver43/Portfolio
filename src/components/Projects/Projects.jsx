import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Project from "../Project/Project";
import "./Projects.css";

export default function Projects() { 
  return (
    <Paper className="projects" id ="project">
     <div className="aboutheading">Projects</div>
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Project/>
      </Grid>
    </Paper>
  );
}
