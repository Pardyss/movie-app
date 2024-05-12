import { Link } from "react-router-dom";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import Movies from "./Movies";

export default function Cards({ eachMovie }) {
  return (
    <>
      {console.log(eachMovie, "eachMovie")}
      <Card
        sx={{
          width: "30%",
          margin: "20px 0",
          padding: "0 0 20px 0",
        }}
      >
        <CardMedia
          sx={{ height: 600 }}
          alt={eachMovie.Title}
          image={
            eachMovie.Poster !== "N/A"
              ? eachMovie.Poster
              : "https://via.placeholder.com/300x400"
          }
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{ fontSize: "24px" }}
          >
            {eachMovie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {eachMovie.Year}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <a
            className="more"
            href={`/details?imdb=${eachMovie.imdbID}`}
            size="small"
          >
            More ...
          </a>
        </CardActions>
      </Card>
    </>
  );
}
