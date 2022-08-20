import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: 10,
    paddingBottom:20,
    margin: 10,
  },
  h: {
    textAlign: "center",
  },
  about: {
   
  },
  button:{

    marginTop:10
  }
});

const Services = () => {
  const classes = useStyles();
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Rameshver_Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <Paper className={classes.root} id="about">
      <h1 className={classes.h}>About</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.about}
      >
        I am a passionate coder with a creative mind. I love problem-solving and
        coming up with innovative solutions to problems. My aim is to make the
        world better in every way I can, by the use of technology and
        innovation. In 1947, on 15th August, India became independent.
        Savitribai Phule, Mahadevi Verma, Capt Laxmi Sehgal, Rani Laxmibai, and
        Basanti Devi are just a few crucial names to remember. These women along
        with many others played a prominent role in leading India towards its
        independence. The ‘Good’ British Rulers in India Not all the British
        were awful; many started adoring India and did incredible things for it.
        Some even took part in the Indian Independence struggle. Some of the
        good British rulers include Warren Hastings who developed court reforms;
        Freda Bedi who supported Indian nationalism; Allan Octavian Hume who
        started the Indian National Congress, etc. Why Do We Celebrate Indian
        Independence Day? India accomplished freedom following a 200-year-long
        battle. India gained complete independence from the British on 15th
        August 1947. That is why the day holds importance in the heart of each
        Indian citizen either living in India or abroad. India is celebrating 75
        years of freedom on 15th August 2022 as Azadi Ka Amrit Mahotsav. This
        day also helps us remember the struggles of freedom fighters and the
        lives sacrificed in attaining independence. The struggle that our
        freedom fighters have gone through shows us that the freedom we
        appreciate today has been attained by shedding the blood of hundreds of
        individuals. It stirs patriotism inside each Indian. It makes the
        current generation understand the struggles of individuals around them
        and familiarise themselves with the freedom fighters of India.
        Importance of Independence Day Essay Independence day is a positive
        historical event for the country since we were free from British rule on
        this day.
      </Grid>
      <Grid>
        <button onClick={onButtonClick} className="button">
          Download CV
        </button>
      </Grid>
    </Paper>
  );
};

export default Services;
