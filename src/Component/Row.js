import React, { Children, useEffect, useState } from "react";
import axios from "../store/axios";
import "./Row.scss";

function Row({ title, fetchUrl, isGame }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setCharacters(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(characters);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__images">
        {characters.map((character) => (
          <img
            key={character.id}
            className={`row__image ${isGame && "row__imageGame"}`}
            src={isGame ? character.picture : character.pictures[0]?.url}
            alt={character.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

// {
//   isGame ? character.picture : character.pictures[0]?.url;
// }
