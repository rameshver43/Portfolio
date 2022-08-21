import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Project from "../Project/Project";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    marginLeft: 10,
    marginRight:10
  },
  h:{
    textAlign:'center',
  },
  paper: {},
}));


export default function Projects() {
  const classes = useStyles();
 
  return (
    <Paper className={classes.root} id ="project">
      <h1 className={classes.h}>Projects</h1>
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
