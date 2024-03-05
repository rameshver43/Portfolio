import React from "react";
import "./About.css";
import Paper from "@material-ui/core/Paper";
import AboutMore from "./components/AboutMore/AboutMore";
import Box from "@material-ui/core/Box";
const Intro = () => {
  return (
    <Box className="about" id="about">
      <div className="aboutheading">About</div>
      <div className="i-left">
        <div className="i-name">
          I'm Rameshver, a passionate coder hailing from Meerut. I pursued my
          B.Tech in Computer Science & Engineering from the prestigious IIT
          Jodhpur. Competitive coding is not just a hobby for me; it's a way of
          life. I thrive on the challenges it presents and the innovative
          solutions it inspires. With a solid foundation in C++, React,
          JavaScript, and Python, I bring a diverse skill set to the table. At
          Samsung Research Institute Delhi, I serve as a Software Development
          Engineer, where I'm immersed in crafting desktop applications using
          .NET and honing my skills as a full-stack developer for websites.
          <br />I believe in leveraging technology and innovation to make a
          positive impact on the world around us. Problem-solving is my forte,
          and I'm driven by the desire to find creative solutions that enhance
          our daily lives. <br />
          As I continue on this journey, I'm always eager to learn and grow.
          Whether it's through new projects, collaborations, or guidance from
          experienced professionals, I'm committed to making meaningful
          contributions to the field of technology.
        </div>
        <AboutMore />
      </div>
      <div className="i-right"></div>
    </Box>
  );
};

export default Intro;
