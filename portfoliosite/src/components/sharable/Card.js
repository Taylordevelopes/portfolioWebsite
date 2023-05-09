import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

export const ReusableCard = ({ images, description, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cardStyle = {
    borderRadius: 10,
    backgroundColor: "#F2F3F5",
    paddingTop: "50px",
    maxHeight: "500px",
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        image={images && images[currentImageIndex]}
        title={title}
        style={{ maxHeight: "250px", objectFit: "contain" }}
        onClick={handleNextImage}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handlePrevImage}>
          <ChevronLeftOutlinedIcon />
        </Button>
        <Button onClick={handleNextImage}>
          <ChevronRightOutlinedIcon />
        </Button>
      </Box>

      <CardContent>
        <Typography fontFamily="monospace" variant="h5" component="h2">
          {title}
        </Typography>

        <Box pt="5px">
          <Typography fontFamily="monospace" variant="body2" component="p">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
