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
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "5rem" }}>
        <Card sx={{ maxWidth: 300 }}>
          <video sx={{ height: 30 }} controls height="150px" width="300">
            <source src="sample-10s.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lecture 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Link to="/Quiz">
              <Button>Quiz</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <video sx={{ height: 30 }} controls height="150px" width="300">
            <source src="sample-10s.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lecture 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick}>
              Share
            </Button>
            <Link to="/Quiz">
              <Button>Quiz</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <video sx={{ height: 30 }} controls height="150px" width="300">
            <source src="sample-10s.mp4" type="video/mp4" />
            {/* Add additional source elements for different video formats if needed */}
            Your browser does not support the video tag.
          </video>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lecture 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
    </>
  );
}
