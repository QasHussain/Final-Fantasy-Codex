import React from "react";
import "./Banner.scss";

function Banner({
  setCharactersI,
  setCharactersII,
  setCharactersIII,
  setCharactersIV,
  setCharactersV,
  setCharactersVI,
  setCharactersVII,
  setCharactersVIII,
  setCharactersIX,
  setCharactersX,
  setCharactersXII,
  setCharactersXIII,
  setCharactersXV,
}) {
  return (
    <header className="banner">
      <div className="banner__buttons">
        <button className="banner__button" onClick={setCharactersI}>
          I
        </button>
        <button className="banner__button" onClick={setCharactersII}>
          II
        </button>
        <button className="banner__button" onClick={setCharactersIII}>
          III
        </button>
        <button className="banner__button" onClick={setCharactersIV}>
          IV
        </button>
        <button className="banner__button" onClick={setCharactersV}>
          V
        </button>
        <button className="banner__button" onClick={setCharactersVI}>
          VI
        </button>
        <button className="banner__button" onClick={setCharactersVII}>
          VII
        </button>
        <button className="banner__button" onClick={setCharactersVIII}>
          VIII
        </button>
        <button className="banner__button" onClick={setCharactersIX}>
          IX
        </button>
        <button className="banner__button" onClick={setCharactersX}>
          X
        </button>
        <button className="banner__button" onClick={setCharactersXII}>
          XII
        </button>
        <button className="banner__button" onClick={setCharactersXIII}>
          XIII
        </button>
        <button className="banner__button" onClick={setCharactersXV}>
          XV
        </button>
      </div>
    </header>
  );
}

export default Banner;
