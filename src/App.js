import { useState } from "react";
import "./App.scss";
import Banner from "./Component/Banner";
import Row from "./Component/Row";
import requests from "./store/requests";
import GameLogoI from "./Component/GameLogoI";
import GameLogoII from "./Component/GameLogoII";
import GameLogoIII from "./Component/GameLogoIII";
import GameLogoIV from "./Component/GameLogoIV";
import GameLogoV from "./Component/GameLogoV";
import GameLogoVI from "./Component/GameLogoVI";
import GameLogoVII from "./Component/GameLogoVII";
import GameLogoVIII from "./Component/GameLogoVIII";
import GameLogoIX from "./Component/GameLogoIX";
import GameLogoX from "./Component/GameLogoX";
import GameLogoXII from "./Component/GameLogoXII";
import GameLogoXIII from "./Component/GameLogoXIII";
import GameLogoXV from "./Component/GameLogoXV";

function App() {
  const [state, setState] = useState("");

  const ff1Active = () => {
    setState("ff1Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 9000);
      }, 300);
    }
  };
  const ff2Active = () => {
    setState("ff2Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 9000);
      }, 300);
    }
  };
  const ff3Active = () => {
    setState("ff3Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 9000);
      }, 300);
    }
  };
  const ff4Active = () => {
    setState("ff4Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 9000);
      }, 300);
    }
  };
  const ff5Active = () => {
    setState("ff5Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 9000);
      }, 300);
    }
  };
  const ff6Active = () => {
    setState("ff6Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 9000);
      }, 300);
    }
  };
  const ff7Active = () => {
    setState("ff7Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 10000);
      }, 300);
    }
  };
  const ff8Active = () => {
    setState("ff8Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 10000);
      }, 300);
    }
  };
  const ff9Active = () => {
    setState("ff9Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 15000);
      }, 300);
    }
  };
  const ff10Active = () => {
    setState("ff10Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 15000);
      }, 300);
    }
  };

  const ff12Active = () => {
    setState("ff12Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 9000);
      }, 300);
    }
  };
  const ff13Active = () => {
    setState("ff13Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 9000);
      }, 300);
    }
  };

  const ff15Active = () => {
    setState("ff15Active");
    if (!Window.sceenTop) {
      setTimeout(() => {
        window.scrollBy(0, 9000);
      }, 300);
    }
  };

  return (
    <div className="App">
      <Banner
        setCharactersI={ff1Active}
        setCharactersII={ff2Active}
        setCharactersIII={ff3Active}
        setCharactersIV={ff4Active}
        setCharactersV={ff5Active}
        setCharactersVI={ff6Active}
        setCharactersVII={ff7Active}
        setCharactersVIII={ff8Active}
        setCharactersIX={ff9Active}
        setCharactersX={ff10Active}
        setCharactersXII={ff12Active}
        setCharactersXIII={ff13Active}
        setCharactersXV={ff15Active}
      />

      {state === "ff1Active" && (
        <div>
          <GameLogoI fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch1Characters}
            isSmall
          />
        </div>
      )}

      {state === "ff2Active" && (
        <div>
          <GameLogoII fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch2Characters}
            isSmall
          />
        </div>
      )}
      {state === "ff3Active" && (
        <div>
          <GameLogoIII fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch3Characters}
            isSmall
          />
        </div>
      )}
      {state === "ff4Active" && (
        <div>
          <GameLogoIV fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch4Characters}
            isSmall
          />
        </div>
      )}
      {state === "ff5Active" && (
        <div>
          <GameLogoV fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch5Characters}
          />
        </div>
      )}
      {state === "ff6Active" && (
        <div>
          <GameLogoVI fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch6Characters}
          />
        </div>
      )}
      {state === "ff7Active" && (
        <div>
          <GameLogoVII fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch7Characters}
          />
        </div>
      )}
      {state === "ff8Active" && (
        <div>
          <GameLogoVIII fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch8Characters}
          />
        </div>
      )}
      {state === "ff9Active" && (
        <div>
          <GameLogoIX fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch9Characters}
          />
        </div>
      )}
      {state === "ff10Active" && (
        <div>
          <GameLogoX fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch10Characters}
          />
        </div>
      )}

      {state === "ff12Active" && (
        <div>
          <GameLogoXII fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch12Characters}
          />
        </div>
      )}
      {state === "ff13Active" && (
        <div>
          <GameLogoXIII fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch13Characters}
          />
        </div>
      )}

      {state === "ff15Active" && (
        <div>
          <GameLogoXV fetchUrl={requests.fetchGame} />
          <Row
            title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
            fetchUrl={requests.fetch15Characters}
          />
        </div>
      )}
    </div>
  );
}

export default App;
