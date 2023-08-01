import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCharactersAction } from "../../redux/actions";

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
    <div>
      {data.characters.results.map((item: Record<string, string>) => (
        <Link to={`/${item.id}`}>
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CharactersList;
