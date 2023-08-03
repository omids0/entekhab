import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCharactersAction } from "../../redux/actions";

import { Typography, Grid, Stack } from "@mui/material";
import LoadingCharacterList from "./loading";
import OnError from "../../components/on-error";

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function CharactersList() {
  const { error, loading, data } = useQuery(GET_CHARACTERS, {
    onCompleted(data) {
      dispatch(getAllCharactersAction(data.characters.results));
    },
  });

  const dispatch = useDispatch();

  if (loading) return <LoadingCharacterList />;

  if (error) return <OnError />;

  return (
    <Stack bgcolor="#fffae0" width="100%">
      <Stack width="100%" direction="row" justifyContent="center">
        <Typography
          variant="h1"
          my={{ xs: 3, md: 10 }}
          textAlign="center"
          color="#333333"
          fontSize="3rem"
          fontFamily={"fantasy"}
        >
          Rick And Morty Album
        </Typography>
      </Stack>
      <Grid
        container
        rowSpacing={{ xs: 1, md: 3 }}
        columnSpacing={{ xs: 1, md: 3 }}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        {data.characters.results.map((item: Record<string, string>) => (
          <Grid item>
            <Link
              data-testid="characterItem"
              to={`/${item.id}`}
              style={{
                width: "fit-content",
              }}
            >
              <Stack
                key={item.id}
                p={5}
                m={{ xs: 0.5, md: 2 }}
                bgcolor="#FFFFFF"
                boxShadow={3}
                minHeight={260}
                maxHeight={260}
                minWidth={260}
                maxWidth={260}
              >
                <img src={item.image} alt={item.name} width="260rem" />
              </Stack>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default CharactersList;
