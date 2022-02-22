import React, { useEffect, useState } from "react";
import axios from "../store/axios";
import "./GameLogo.scss";

function GameLogoII({ fetchUrl }) {
  const [game, setGame] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        if (!isCancelled) {
          setGame(request.data);
        }
      } catch (e) {
        if (!isCancelled) {
          setGame(e.message);
        }
      }
    }

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [fetchUrl]);

  return (
    <div className="gameRow">
      <img src={game[1]?.picture} className="gameRow__image" />
      <section className="gameRow__stats">
        <p className="gameRow__stat">
          PLATFORM : {game[1]?.platform.toUpperCase()}
        </p>
        <p className="gameRow__stat">
          RELEASE DATE : {game[1]?.releaseDate.toUpperCase()}
        </p>
        <p className="gameRow__description">{game[1]?.description}</p>
      </section>
    </div>
  );
}

export default GameLogoII;
