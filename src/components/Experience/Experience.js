import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "./Experience.css";
import Box from "@material-ui/core/Box";

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
    companyName: "Samsung Electronics",
    details: [
      "Automated final stage TV software testing process using C++ as a key contributor on a TV package development project.",
      "Innovated in Artificial Intelligence and Machine Learning, designing a robust ML model for hardware defect analysis in TV boards, improving diagnosis accuracy and efficiency",
      "Led the creation of a Windows application in C#, integrating TV log analysis for streamlined TV testing, enhancing efficiency",
      "Spearheaded the development of an internal web portal with React.js and .NET Core, centralizing employee activity management for improved efficiency",
    ],
  },
  {
    companyName: "Wipro Limited",
    details: [
      "Proficiently developed and deployed automation scripts for a CRM Banking Application using the BDD framework with SpecFlow.",
      "Skillfully utilized C, SpecFlow, BDD methodologies, CRM, and Power Platform to drive efficient and effective automation processes.",
    ],
  },
  {
    companyName: "Oyelazy - Internship",
    details: [
      "Contributed significantly to the front‐end development of an Android application, ensuring a seamless user experience.",
      "Skillfully undertook front‐end development responsibilities for a website, focusing on creating an engaging and user‐friendly interface.",
      "Leveraged a range of cutting‐edge technologies, including React, React Native, Redux, JavaScript, and Material‐UI React, to deliver high‐quality solutions.",
    ],
  },
];
export default function Experience() {
  const classes = useStyles();

  return (
    <Box className="experience" id="experience">
      <div className="experienceHeading">Experience</div>
      {Experiences.map((item, index) => (
        <div key={index}>
          <Card className={classes.root} variant="outlined">
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
          <br />
        </div>
      ))}
    </Box>
  );
}
