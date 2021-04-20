import React, { useState, useEffect, useRef } from "react";

const Song = ({ currentSong, type, setCurrentSong, target, setTarget }) => {
  const [isActiveSong, setIsActiveSong] = useState(false);

  const songRef = useRef();

  useEffect(() => {
    if (target === songRef.current) {
      setIsActiveSong(true);
    } else {
      setIsActiveSong(false);
    }
  }, [target]);

  const changeSong = (e) => {
    if (type !== "songSample") return;
    setCurrentSong(currentSong);
    setTarget(e.currentTarget);
    setIsActiveSong(!isActiveSong);
  };
  return (
    <div
      onClick={changeSong}
      className={`${type} ${isActiveSong ? "songSample--active" : ""}`}
      ref={songRef}
    >
      <div className={`${type}__inner`}>
        <img className={`${type}__cover`} src={currentSong.cover} alt="cover" />
        <div className={`${type}__text`}>
          <h4 className={`${type}__title`}>{currentSong.name}</h4>
          <p className={`${type}__artist`}>{currentSong.artist}</p>
        </div>
      </div>
    </div>
  );
};
export default Song;
