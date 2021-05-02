import React, { useState, useEffect } from "react";

const Song = ({ currentSong, type, setCurrentSong, targetId, setTargetId }) => {
  const [isActiveSong, setIsActiveSong] = useState(false);

  useEffect(() => {
    if (targetId === currentSong.id) {
      setIsActiveSong(true);
    } else {
      setIsActiveSong(false);
    }
  }, [targetId]);
  const changeSong = (e) => {
    if (type !== "songSample") return;
    setCurrentSong(currentSong);
    setTargetId(currentSong.id);
  };
  return (
    <div
      onClick={changeSong}
      className={`${type} ${isActiveSong ? "songSample--active" : ""}`}
    >
      <div className={`${type}__inner`}>
        <img className={`${type}__cover`} src={currentSong.cover} alt="cover" />
        <div className={`${type}__text`}>
          <h4 className={`${type}__title`}>{currentSong.name}</h4>
          <p className={`${type}__artist`}>{currentSong.artist}</p>
        </div>
      </div>
    </div>

    // <p>{currentSong.key}</p>
  );
};
export default Song;
