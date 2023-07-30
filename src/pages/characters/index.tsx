import React from "react";
import { useQuery, gql } from "@apollo/client";

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
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  console.log({ error, loading, data });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div>
      {data.characters.results.map((item: Record<string, string>) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CharactersList;
