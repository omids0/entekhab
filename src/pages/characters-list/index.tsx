import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCharactersAction } from "../../redux/actions";

import { Typography, Grid, Stack } from "@mui/material";

const GET_CHARACTERS = gql`
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
      dispatch(getAllCharactersAction(data));
    },
  });

  const dispatch = useDispatch();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <Stack bgcolor="#FFF000" width="100%">
      <Stack width="100%" direction="row" justifyContent="center">
        <Typography variant="h3" my={10} textAlign="center">
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
            <Link to={`/${item.id}`} style={{ width: "fit-content" }}>
              <Stack
                key={item.id}
                p={5}
                m={{ xs: 0.5, md: 2 }}
                bgcolor="#FFFFFF"
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
