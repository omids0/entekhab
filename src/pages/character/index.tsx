import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "./helper";

function Character() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong...</p>;

  return (
    <div>
      <img src={data?.character.image} alt={data?.character.name} />
    </div>
  );
}

export default Character;
