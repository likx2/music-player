import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

export default function Player({ currentSong, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  const playMusicHandler = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying, currentSong]);

  const [time, setTime] = useState({ currentTime: 0, duration: 0 });

  const updateTime = (e) => {
    setTime({
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };
  const timeRender = (time) => {
    const currentTime = Math.floor(time);
    const minutes = (currentTime - (currentTime % 60)) / 60;
    const seconds = currentTime % 60;
    return `${minutes}:${seconds / 10 < 1 ? "0" + seconds : seconds}`;
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setTime({ ...time, currentTime: e.target.value });
  };

  return (
    <div className="player">
      <div className="player__play-controls">
        <FontAwesomeIcon
          className="player__skip-back"
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playMusicHandler}
          className="player__play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="player__skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
      <div className="player__time-controls">
        <p>{timeRender(time.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0}
          max={time.duration || "0"}
          value={time.currentTime}
          type="range"
        />
        <p>{timeRender(time.duration)}</p>
      </div>
      <audio
        onLoadedMetadata={updateTime}
        onTimeUpdate={(e) => (isPlaying ? updateTime(e) : "")}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}
