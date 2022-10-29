import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./Project.css";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 345,
		minHeight:495,
	  },
	  media: {
		height: 140,
	  },
	[theme.breakpoints.down('sm')]: {
		root: {
			minWidth:300,
			minHeight:0,
		  },
		  media: {
			height: 140,
		  },
	  }
}));

export default function Project() {
	const classes = useStyles();
	const Project_view = [
		{
			Project_Name:
				"Dynamically Changing Mobile Screen Brightness Using Features Of Eye",
			Project_Details:
				"Implemented an app that worked on recognition of different action of the eye for adjusting the brightness of Android phones. Implemented on different activities of the eye like Eye Tracking, Pupil-Dilation, Opening and Closing of Eye, Comparing different Stages of Eye.",
			Imageurl: "brightness.jpg",
			viewSourceCode:false,
			},
		{
			Project_Name: "Automatic recipe recommendations from ingredient images",
			Project_Details:
				"An Android App that takes the pictures of ingredients using the mobile camera and gives Automatic suggestions for the recipe.",
			Imageurl:"recipe.jpg",
			viewSourceCode:false,
			},
		{
			Project_Name: "Amazon Website Clone",
			Project_Details:
				"Amazon Clone with fully functionality using ReactJs, firebase and nodeJs.",
				Imageurl:"amazon.jpg",
				viewSourceCode:true,
				sourceCode:"https://github.com/rameshver43/Amazon",
		},
		{
			Project_Name: "Portfolio Website",
			Project_Details:
				"A full fuctionality of portfolio website using ReactJs, firebase and nodeJs.",
				Imageurl:"aboutme.jpg",
				viewSourceCode:true,
				sourceCode:"https://github.com/rameshver43/rameshver"
		},
	];

	return (
		<Grid container spacing={3}>
			{Project_view.map((item,index) => {
				return (
					<Grid key = {index} item xs>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt=""
									height="140"
									image={item.Imageurl}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{item.Project_Name}
									</Typography>
									<Typography component={"span"} className="tabBody">
										{item.Project_Details}
									</Typography>
								</CardContent>
							</CardActionArea>
							{item.viewSourceCode&&<CardActions>
								<a
									className="footerlink"
									href={item.sourceCode}
									target="_blank"
									rel="noreferrer">

								<Button variant="outlined" color="primary">
									View Source Code
								</Button>
								</a>
							</CardActions>}
						</Card>
					</Grid>
				);
			})}
		</Grid>
	);
}
