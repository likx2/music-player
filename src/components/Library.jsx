import React, { useState } from "react";
import Song from "./Song";
const Library = ({
  songs,
  setCurrentSong,
  isLibraryActive,
  setIsLibraryActive,
  targetId,
  setTargetId,
}) => {
  return (
    <div className={`library ${isLibraryActive ? "library--active" : ""}`}>
      <div className="library__top">
        <h2 className="library__title">Library</h2>
        <button
          className="library__close-btn"
          onClick={() => setIsLibraryActive(!isLibraryActive)}
        >
          &times;
        </button>
      </div>
      <div className="library__songs">
        {songs.map((song) => (
          <Song
            key={song.id}
            currentSong={song}
            type="songSample"
            setCurrentSong={setCurrentSong}
            targetId={targetId}
            setTargetId={setTargetId}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
