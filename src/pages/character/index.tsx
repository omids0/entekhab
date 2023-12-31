import { useParams } from "react-router-dom";
import { useCharacter } from "./helper";
import { Stack, Typography } from "@mui/material";
import LoadingCharacter from "./loading";
import OnError from "../../components/on-error";

function Character() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  if (loading) return <LoadingCharacter />;

  if (error) return <OnError />;

  return (
    <Stack
      width="100wh"
      height="100vh"
      direction="column"
      justifyContent="center"
      justifyItems="center"
      alignContent="center"
      bgcolor="#fffae0"
    >
      <Stack mx="auto" direction={{ xs: "column", md: "row" }} bgcolor="#FFFF">
        <img
          src={data?.character.image}
          alt={data?.character.name}
          width={300}
          style={{ margin: "auto" }}
        />
        <Stack p={2}>
          <Typography variant="h2" color="">
            {data?.character.name}
          </Typography>
          <Typography variant="h6" color="#999999">
            {data?.character.gender}
          </Typography>
          <Stack my={5} direction="row" alignItems="center" gap={2}>
            <Typography variant="h5">Episodes:</Typography>
            <Typography variant="h4" color="#ff0000">
              {data?.character.episode.length}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Character;
