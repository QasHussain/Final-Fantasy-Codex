import React from "react";
import "./HomePage.scss";
import Moogle from "../Application Image Assets/Moogle.png";

function HomePage() {
  return (
    <div className="homePage">
      <img className="moogle" src={Moogle} />
      <div class="bubble">
        <p>
          HEY THERE! WELCOME TO THE FINAL FANTASY CODEX, YOUR ONLINE
          ENCYCLOPEDIA FOR ALL CHARACTERS IN FINAL FANTASY!
        </p>
        <p>
          USE THE NAV BAR UP TOP TO BROWSE THROUGH EACH ENTRY IN THE SERIES!
        </p>
        <p>
          IF YOU WANT TO FIND A PARTICULAR CHARACTER, FEEL FREE TO USE THE
          SEARCH BAR JUST ABOVE ME AT ANY TIME!
        </p>
        <p>HAVE FUN!!</p>
        <div class="pointer"></div>
      </div>
    </div>
  );
}

export default HomePage;
