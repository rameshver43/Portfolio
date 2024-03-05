import * as React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./AboutMore.css";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    marginBottom: "15px",
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

const Extracurricular = [
  "Been Member of ”Youth Parliament” which stood first in the 17th National Youth Parliament Competition organized by Ministry(2013-2014).",
  "Volunteer in public charitable foundation DAKSHANA for conducting entrance tests across India every year.",
  "Assistant head in college fest IGNUS IIT Jodhpur 2019.",
];

export default function AboutMore() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        className={classes.root}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className={expanded === "panel1" ? "tabbar2" : ""}
          id="panel1bh-header"
        >
          <Typography
            className={expanded === "panel1" ? "tabHeading2" : "tabHeading1"}
            component={"span"}
          >
            Education
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid>
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
                {index !== 2 && <div className="space"></div>}
              </div>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.root}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          className={expanded === "panel2" ? "tabbar2" : ""}
          id="panel2bh-header"
        >
          <Typography
            className={expanded === "panel2" ? "tabHeading2" : "tabHeading1"}
            component={"span"}
          >
            Skills
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid>
            <div className="bodyData">
              <Typography component={"span"} className="tabBody">
                {Skills}
              </Typography>
            </div>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.root}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          className={expanded === "panel4" ? "tabbar2" : ""}
          id="panel4bh-header"
        >
          <Typography
            className={expanded === "panel4" ? "tabHeading2" : "tabHeading1"}
            component={"span"}
          >
            Extracurricular
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid>
            {Extracurricular.map((item, index) => (
              <div key={index}>
                <Typography component={"span"} className="tabBody">
                  • {item}
                </Typography>
              </div>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
