import React, { useState } from "react";
import Navbar from "./Navbar";
import Song from "./Song";
import Library from "./Library";
import Player from "./Player";

const Main = ({ songs }) => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [targetId, setTargetId] = useState(songs[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryActive, setIsLibraryActive] = useState(false);
  return (
    <div
      style={{
        marginLeft: isLibraryActive ? "30%" : "",
        transition: "all 0.4s ease",
      }}
    >
      <Navbar
        setIsLibraryActive={setIsLibraryActive}
        isLibraryActive={isLibraryActive}
      />
      <Song currentSong={currentSong} type="currentSong" />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setTargetId={setTargetId}
        targetId={targetId}
      />
      <Library
        songs={songs}
        isLibraryActive={isLibraryActive}
        setIsLibraryActive={setIsLibraryActive}
        setCurrentSong={setCurrentSong}
        targetId={targetId}
        setTargetId={setTargetId}
      />
    </div>
  );
};

export default Main;
