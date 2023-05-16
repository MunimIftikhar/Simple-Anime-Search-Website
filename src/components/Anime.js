import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Anime({ anime, setPage }) {
  if (anime.length === 0) {
    return;
  }
  const handleClick = (e) => {
    setPage(anime);
  };
  return (
    <div className="anime-box">
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image={anime[0].images.jpg.image_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {anime[0].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {anime[0].synopsis}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
