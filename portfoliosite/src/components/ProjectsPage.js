import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { ReusableCard } from "./sharable/Card";
import ProjectsData from "./sharable/ProjectArray";
import ImageArray from "./sharable/ImageArray";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt="50px"
        pb="15px"
        sx={{ color: "#9CDCFE", fontSize: "25px" }}
        fontFamily="monospace"
      >
        WORK
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="20px"
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {ProjectsData.map((project) => (
            <Grid key={project.title} item xs={12} sm={6} md={4} lg={3}>
              <Box maxWidth="400px" margin="0 auto">
                <ReusableCard
                  images={project.image}
                  title={project.title}
                  description={project.description}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          onClick={() => {
            navigate("/");
          }}
          sx={{ color: "#9CDCFE", borderColor: "#9CDCFE" }}
          variant="outlined"
        >
          Home
        </Button>
      </Box>
    </Box>
  );
}
