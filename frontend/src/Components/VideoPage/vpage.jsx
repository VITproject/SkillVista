import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard() {
  const handleClick = () => {
    console.log("open quiz");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "2rem",
        paddingLeft: "4.5rem",
      }}
    >
      <Card sx={{ maxWidth: 300, maxHeight: 360 }}>
        <div style={{ position: "relative", paddingBottom: "56.25%" }}>
          <video
            style={{ position: "absolute", width: "100%", height: "100%" }}
            controls
          >
            <source
              src="http://res.cloudinary.com/dpgupuxpa/video/upload/v1710605862/unknown/subjects/2024-03-16T161029898Z.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lecture 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Link to="/Quiz">
            <Button>Quiz</Button>
          </Link>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300, maxHeight: 360 }}>
        <div style={{ position: "relative", paddingBottom: "56.25%" }}>
          <video
            style={{ position: "absolute", width: "100%", height: "100%" }}
            controls
          >
            <source
              src="https://youtu.be/K-nWQ3kwVbs?si=3kzfI93Jb859hkwU"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lecture 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Link to="/Quiz">
            <Button>Quiz</Button>
          </Link>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 300, maxHeight: 360 }}>
        <div style={{ position: "relative", paddingBottom: "56.25%" }}>
          <video
            style={{ position: "absolute", width: "100%", height: "100%" }}
            controls
          >
            <source
              src="http://res.cloudinary.com/dpgupuxpa/video/upload/v1710616869/unknown/subjects/2024-03-16T192036606Z.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lecture 3
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Link to="/Quiz">
            <Button>Quiz</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
