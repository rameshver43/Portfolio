import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  root: {
    margin:20,
    backgroundColor:'white',
    border: "1px solid black",
    borderRadius: 8,
    padding:20,
  },
  media: {
   
  },
  viewcode:{


  }
});

export default function Project(props) {
  const classes = useStyles();
  const Project_view = [
    {
      Project_Name:
        "Dynamically Changing Mobile Screen Brightness Using Features Of Eye",
      Project_Details:
        "Implemented an app that worked on recognition of different action of the eye for adjusting the brightness of Android phones. Implemented on different activities of the eye like Eye Tracking, Pupil-Dilation, Opening and Closing of Eye, Comparing different Stages of Eye.",
    },
    {
      Project_Name: "Automatic recipe recommendations from ingredient images",
      Project_Details:
        "An Android App that takes the pictures of ingredients using the mobile camera and gives Automatic suggestions for the recipe.",
    },
    {
      Project_Name: "Amazon Website Clone",
      Project_Details:
        "Amazon Clone with fully functionality using ReactJs, firebase and nodeJs.",
    },
    {
      Project_Name: "Portfolio Website",
      Project_Details:
        "A full fuctionality of portfolio website using ReactJs, firebase and nodeJs.",
    },
  ];

  return (
    <Grid>

     {Project_view.map(item => {
        return (
          <Grid>
            <Card className={classes.root}>
              <Typography>{item.Project_Name}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.Project_Details}
              </Typography>
              <Grid className={classes.viewcode}>
                <Typography variant="body2" color="primary" component="p"><a href='#' target="_blank"> 
                View Source Code</a>
              </Typography>
            </Grid>
            </Card>
           
          </Grid>
        );
      })}
    </Grid>
   
  );
}
