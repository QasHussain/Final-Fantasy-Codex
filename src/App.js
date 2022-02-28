import { useState, useRef } from "react";
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
import SearchBar from "./Component/SearchBar";
import HomePage from "./Component/HomePage";
import Background from "./Component/Background";

function App() {
  const [state, setState] = useState("");
  const [homePage, setHomePage] = useState("true");
  const contentRef = useRef();

  const ff1Active = () => {
    setState("ff1Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };
  const ff2Active = () => {
    setState("ff2Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };
  const ff3Active = () => {
    setState("ff3Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };
  const ff4Active = () => {
    setState("ff4Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };
  const ff5Active = () => {
    setState("ff5Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };
  const ff6Active = () => {
    setState("ff6Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };
  const ff7Active = () => {
    setState("ff7Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };
  const ff8Active = () => {
    setState("ff8Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };
  const ff9Active = () => {
    setState("ff9Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };
  const ff10Active = () => {
    setState("ff10Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };

  const ff12Active = () => {
    setState("ff12Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };
  const ff13Active = () => {
    setState("ff13Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
      }, 300);
    }
  };

  const ff15Active = () => {
    setState("ff15Active");
    setHomePage("");
    if (!Window.sceenTop) {
      setTimeout(() => {
        contentRef.current.scrollIntoView();
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
      <Background>
        <div>
          <SearchBar fetchUrl={requests.fetchCharacterSearch} isSearchBar />
          {homePage === "true" && <HomePage />}

          {state === "ff1Active" && (
            <div ref={contentRef}>
              <GameLogoI fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch1Characters}
              />
            </div>
          )}

          {state === "ff2Active" && (
            <div ref={contentRef}>
              <GameLogoII fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch2Characters}
              />
            </div>
          )}
          {state === "ff3Active" && (
            <div ref={contentRef}>
              <GameLogoIII fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch3Characters}
              />
            </div>
          )}
          {state === "ff4Active" && (
            <div ref={contentRef}>
              <GameLogoIV fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch4Characters}
              />
            </div>
          )}
          {state === "ff5Active" && (
            <div ref={contentRef}>
              <GameLogoV fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch5Characters}
              />
            </div>
          )}
          {state === "ff6Active" && (
            <div ref={contentRef}>
              <GameLogoVI fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch6Characters}
              />
            </div>
          )}
          {state === "ff7Active" && (
            <div ref={contentRef}>
              <GameLogoVII fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch7Characters}
              />
            </div>
          )}
          {state === "ff8Active" && (
            <div ref={contentRef}>
              <GameLogoVIII fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch8Characters}
              />
            </div>
          )}
          {state === "ff9Active" && (
            <div ref={contentRef}>
              <GameLogoIX fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch9Characters}
              />
            </div>
          )}
          {state === "ff10Active" && (
            <div ref={contentRef}>
              <GameLogoX fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch10Characters}
              />
            </div>
          )}
          {state === "ff12Active" && (
            <div ref={contentRef}>
              <GameLogoXII fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch12Characters}
              />
            </div>
          )}
          {state === "ff13Active" && (
            <div ref={contentRef}>
              <GameLogoXIII fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch13Characters}
              />
            </div>
          )}
          {state === "ff15Active" && (
            <div ref={contentRef}>
              <GameLogoXV fetchUrl={requests.fetchGame} />
              <Row
                title="CHARACTER SCROLL - CLICK ON IMAGE FOR MORE INFORMATION"
                fetchUrl={requests.fetch15Characters}
              />
            </div>
          )}
        </div>
      </Background>
    </div>
  );
}

export default App;
