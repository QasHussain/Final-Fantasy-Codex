import "./App.scss";
import Row from "./Component/Row";
import requests from "./store/requests";

function App() {
  return (
    <div className="App">
      <Row title="Games" fetchUrl={requests.fetchGame} isGame />
      <Row title="Characters" fetchUrl={requests.fetchCharacters} />
    </div>
  );
}

export default App;
