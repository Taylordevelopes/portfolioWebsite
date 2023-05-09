import { Typography, Box, Divider } from "@mui/material";
import React from "react";

export default function BioSkills() {
  return (
    <Box>
      <Box>
        <Box>
          <Divider>BIO</Divider>
        </Box>
        <Typography fontFamily="monospace" color="#9CDCFE">
          I am a developer based in Atlanta, Georgia, passionate about
          everything tech and finding innovative ways to make positive and
          inspiring changes to the world. The projects that I have been
          fortunate enough to work on that bring me the most joy are those that
          I know will make a direct positive impact on the users they are
          intended for. Fun facts about me: I am originally from Florida, I love
          exercising, reading, and playing guitar in my free time. I am
          definitely a team-oriented person and believe that there is nothing
          that can't be accomplished if we band together!
        </Typography>
      </Box>
      <Box>
        <Divider sx={{ fontFamily: "monospace", color: "#9CDCFE" }}>
          Technical Tool Box
        </Divider>
        <Typography fontFamily="monospace" color="#9CDCFE">
          JAVASCRIPT - .NET - NODE - REACT - ANGULAR - AWS - MYSQL - GIT - AGILE
        </Typography>
      </Box>
    </Box>
  );
}
