import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { purple } from '@material-ui/core/colors';
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
              <Grid>
                <a href='#' target="_blank"> <Typography variant="body2" color="primary" component="p">
                View Source Code
              </Typography></a>
            </Grid>
            </Card>
           
          </Grid>
        );
      })}
    </Grid>
   
  );
}
