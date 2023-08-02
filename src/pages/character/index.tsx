import { useParams } from "react-router-dom";
import { useCharacter } from "./helper";
import { Stack, Typography } from "@mui/material";

function Character() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);
  console.log("🚀 ~ file: index.tsx:9 ~ Character ~ data:", data);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong...</p>;

  return (
    <Stack
      width="100wh"
      height="100vh"
      direction="column"
      justifyContent="center"
      justifyItems="center"
      alignContent="center"
    >
      <Stack mx="auto" direction={{ xs: "column", md: "row" }}>
        <img
          src={data?.character.image}
          alt={data?.character.name}
          width={300}
          style={{ margin: "0 auto" }}
        />
        <Stack p={2}>
          <Typography variant="h2" color="">
            {data?.character.name}
          </Typography>
          <Typography variant="h5" color="#999999">
            {data?.character.gender}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Character;
