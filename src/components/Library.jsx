import React, { useState } from "react";
import Song from "./Song";
const Library = ({ songs, setCurrentSong }) => {
  const [target, setTarget] = useState(null);
  return (
    <div className="library">
      <h2 className="library__title">Library</h2>
      <div className="library__songs">
        {songs.map((song) => (
          <Song
            key={song.id}
            currentSong={song}
            type="songSample"
            setCurrentSong={setCurrentSong}
            target={target}
            setTarget={setTarget}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
