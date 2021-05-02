import React, { useState } from "react";
// import Player from "./components/Player";
// import Song from "./components/Song";
import data from "./data";
import "./styles/app.scss";
// import Library from "./components/Library";
// import Navbar from "./components/Navbar";
// import useFetchSongs from "./utils/useFetchSongs";
// import LoadingSVG from "./images/Loading.svg";
import Main from "./components/Main";
function App() {
  const [songs, setSongs] = useState(data());

  // const { isLoading, songs } = useFetchSongs();

  // if (isLoading) return <img src={LoadingSVG} />;
  return (
    <div className="app">
      <Main songs={songs} />
    </div>
  );
}

export default App;
