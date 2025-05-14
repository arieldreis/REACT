import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Importar um ícone
import {faCirclePlay, faCirclePause,faBackwardStep, faForwardStep} from "@fortawesome/free-solid-svg-icons"; // ImportAR O TIPO DE ÍCONE
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");
    const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`
};
const Player = ({duration, randomIdFromArtist, randomId2FromArtist, audio}) => {
    const audioPlayer = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(formatTime(0));
    const playPause = () => {
        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
        setIsPlaying(!isPlaying);
        setCurrentTime(formatTime(audioPlayer.current.currentTime));
    }
  return (
    <div className='player'>
        <div className="player__controllers">
            <Link to={`/song/${randomIdFromArtist}`}>
                <FontAwesomeIcon icon={faBackwardStep} className='player__icon'/>
            </Link>
            <FontAwesomeIcon 
            icon={isPlaying ? faCirclePause: faCirclePlay} 
            className='player__icon player__icon--play'
            onClick={() => playPause()}
            />
            <Link to={`/song/${randomId2FromArtist}`}>
                <FontAwesomeIcon icon={faForwardStep} className='player__icon'/>
            </Link>
        </div>
        <div className="player__progress">
            <p>{currentTime}</p>
            <div className="player__bar">
                <div className="player__bar-progress"></div>
            </div>
            <p>{duration}</p>
        </div>
        <audio src={audio} ref={audioPlayer}></audio>
    </div>
  )
}

export default Player;
