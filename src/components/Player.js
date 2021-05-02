import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

export default function Player({
  currentSong,
  isPlaying,
  setIsPlaying,
  songs,
  setCurrentSong,
  setTargetId,
}) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying, currentSong]);

  const [time, setTime] = useState({ currentTime: 0, duration: 0 });

  const audioPlayHandler = () => {
    if (!isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  };

  const playMusicHandler = () => {
    setIsPlaying(!isPlaying);
  };
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

  const dragHandler = (e, value) => {
    audioRef.current.currentTime = value;
    setTime({ ...time, currentTime: value });
  };

  const skipTrackHandler = (action) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (action === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      setTargetId(songs[(currentIndex + 1) % songs.length].id);
    } else if (action === "skip-back") {
      if (currentIndex === 0) {
        setCurrentSong(songs[songs.length - 1]);
        setTargetId(songs[songs.length - 1].id);

        return;
      }
      setCurrentSong(songs[currentIndex - 1]);
      setTargetId(songs[currentIndex - 1].id);
    }
  };

  const iOSBoxShadow =
    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

  const IOSSlider = withStyles({
    root: {
      color: "#3880ff",
      height: 5,
      padding: "15px 0",
    },
    thumb: {
      height: 28,
      width: 28,
      backgroundColor: "#fff",
      boxShadow: iOSBoxShadow,
      marginTop: -13,
      marginLeft: -13,
      "&:focus, &:hover, &$active": {
        boxShadow:
          "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 12px)",
      top: -22,
      "& *": {
        background: "transparent",
        color: "#000",
      },
    },
    track: {
      height: 5,
      borderRadius: "15px",
      background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`,
    },
    rail: {
      height: 5,
      opacity: 0.5,
      backgroundColor: "#636e72",
      borderRadius: "15px",
    },
    mark: {
      backgroundColor: "#636e72",
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  })(Slider);

  return (
    <div className="player">
      <div className="player__play-controls">
        <FontAwesomeIcon
          className="player__skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipTrackHandler("skip-back")}
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
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
      <div className="player__time-controls">
        <p>{timeRender(time.currentTime)}</p>
        <IOSSlider
          onChange={dragHandler}
          min={0}
          max={time.duration || 0}
          value={time.currentTime}
        />

        <p>{timeRender(time.duration)}</p>
      </div>
      <audio
        onLoadedMetadata={updateTime}
        onTimeUpdate={(e) => (isPlaying ? updateTime(e) : "")}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={() => skipTrackHandler("skip-forward")}
      ></audio>
    </div>
  );
}
