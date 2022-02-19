import React, { Children, useEffect, useState } from "react";
import axios from "../store/axios";
import "./Row.scss";

function Row({ title, fetchUrl, isSmall }) {
  const [characters, setCharacters] = useState([]);
  const [active, setActive] = useState("true");

  useEffect(() => {
    let isCancelled = false;
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        if (!isCancelled) {
          setCharacters(request.data);
        }
      } catch (e) {
        if (!isCancelled) {
          setCharacters(e.message);
        }
      }
    }

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [fetchUrl]);

  const activate = () => {
    if (active === "true") {
      setActive("false");
    } else {
      setActive("true");
    }
  };

  console.log(characters);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__images ${isSmall && "row__imagesSmall"}`}>
        {characters.map((character) => (
          <span className="row__images2">
            <span className="row__text">
              <p className="row__textName">{`NAME: ${character.name.toUpperCase()}`}</p>
              <p className="row__textJob">{`JOB: ${character.job.toUpperCase()}`}</p>
              <p className="row__textRace">{`RACE: ${character.race.toUpperCase()}`}</p>
            </span>
            <img
              key={character.id}
              className={`row__image ${isSmall && "row__imageSmall"}`}
              src={character.pictures[0]?.url}
              alt={character.name}
              onClick={activate}
            />
            {active === "true" && (
              <div>
                <p>{character.name}</p>
              </div>
            )}
          </span>
        ))}
      </div>
      {active === "true" && <div className="row__descriptionBox"></div>}
    </div>
  );
}

export default Row;
