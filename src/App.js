import { useState } from "react";
import "./App.scss";
import Banner from "./Component/Banner";
import Row from "./Component/Row";
import requests from "./store/requests";

function App() {
  const [state, setState] = useState("");

  const ff1Active = () => {
    setState("ff1Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };
  const ff2Active = () => {
    setState("ff2Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };
  const ff3Active = () => {
    setState("ff3Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };
  const ff4Active = () => {
    setState("ff4Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };
  const ff5Active = () => {
    setState("ff5Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };
  const ff6Active = () => {
    setState("ff6Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };
  const ff7Active = () => {
    setState("ff7Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };
  const ff8Active = () => {
    setState("ff8Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };
  const ff9Active = () => {
    setState("ff9Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };
  const ff10Active = () => {
    setState("ff10Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };

  const ff12Active = () => {
    setState("ff12Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };
  const ff13Active = () => {
    setState("ff13Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
    }
  };

  const ff15Active = () => {
    setState("ff15Active");
    if (!Window.sceenTop) {
      window.scrollBy(0, 500);
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
        <Row title="1" fetchUrl={requests.fetch1Characters} isSmall />
      )}

      {state === "ff2Active" && (
        <Row title="2" fetchUrl={requests.fetch2Characters} isSmall />
      )}
      {state === "ff3Active" && (
        <Row title="3" fetchUrl={requests.fetch3Characters} isSmall />
      )}
      {state === "ff4Active" && (
        <Row title="4" fetchUrl={requests.fetch4Characters} isSmall />
      )}
      {state === "ff5Active" && (
        <Row title="5" fetchUrl={requests.fetch5Characters} />
      )}
      {state === "ff6Active" && (
        <Row title="6" fetchUrl={requests.fetch6Characters} />
      )}
      {state === "ff7Active" && (
        <Row title="7" fetchUrl={requests.fetch7Characters} />
      )}
      {state === "ff8Active" && (
        <Row title="8" fetchUrl={requests.fetch8Characters} />
      )}
      {state === "ff9Active" && (
        <Row title="9" fetchUrl={requests.fetch9Characters} />
      )}
      {state === "ff10Active" && (
        <Row title="10" fetchUrl={requests.fetch10Characters} />
      )}

      {state === "ff12Active" && (
        <Row title="12" fetchUrl={requests.fetch12Characters} />
      )}
      {state === "ff13Active" && (
        <Row title="13" fetchUrl={requests.fetch13Characters} />
      )}

      {state === "ff15Active" && (
        <Row title="15" fetchUrl={requests.fetch15Characters} />
      )}
    </div>
  );
}

export default App;
