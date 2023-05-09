import React from "react";
import { Box, Typography } from "@mui/material";
import profilePhoto from "../content/images/Profile.jpg";

export default function Biography() {
  return (
    <Box>
      <Box>
        <Box display="flex" justifyContent="center">
          <Typography fontFamily="Lilita One">ME</Typography>
        </Box>
      </Box>
      <Box pt={"20px"}>
        <img src={profilePhoto} style={{ width: "350px", height: "350px" }} />
      </Box>
    </Box>
  );
}
