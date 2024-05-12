import { Stack } from "@mui/material";
import Cards from "./Cards";
import Divider from "@mui/material/Divider";

export default function Movies({ movies }) {
  return (
    <>
      <Stack
        direction="row"
        divider={<Divider orientation="horizontal" flexItem />}
        sx={{
          margin: "40px 0",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {movies.map((eachMovie) => {
          return <Cards key={eachMovie.imdbID} eachMovie={eachMovie} />;
        })}
      </Stack>
    </>
  );
}
