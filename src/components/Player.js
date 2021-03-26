import React from 'react'


export default function Player() {
    return (
        <div className="player">
            <div className="player__play-controls"></div>
            <div className="player__time-controls">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
        </div>
    )
}