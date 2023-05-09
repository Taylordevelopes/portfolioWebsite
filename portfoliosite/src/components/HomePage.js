import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Box, Button, Stack, Grid, Typography } from "@mui/material";
import Biography from "./Biography";
import NavBar from "./NavBar";
import BioSkills from "./BioSkills";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useNavigate } from "react-router-dom";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import resume from "../content/resume/TaylorSpearResume.pdf";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      pt="50px"
    >
      <Typography
        fontFamily="monospace"
        color="#9CDCFE"
        variant="h1"
        sx={{ fontSize: "48px", mb: "10px" }}
      >
        Taylor Spear
      </Typography>

      <Button
        sx={{ color: "#9CDCFE", mb: "10px" }}
        startIcon={<EmailOutlinedIcon />}
      >
        taylorspear1993@gmail.com
      </Button>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing="2em"
        sx={{ mb: "20px" }}
      >
        <Button
          href="https://www.linkedin.com/in/taylor-spear-a7b8a21b9/"
          variant="contained"
          sx={{ color: "white" }}
        >
          Connect on LinkedIn
        </Button>

        <Button
          component="a"
          href={resume}
          download="resume.pdf"
          color="warning"
          variant="contained"
        >
          Download My Resume
        </Button>
      </Stack>

      <Box
        className="textContainer"
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth="400px"
        margin="auto"
      >
        <BioSkills />
      </Box>

      <Box pt="10px">
        <Button
          onClick={() => {
            navigate("/projects");
          }}
          sx={{ color: "white" }}
          endIcon={<ChevronRightOutlinedIcon />}
        >
          VIEW MY WORK
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
