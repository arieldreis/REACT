import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Importar um ícone
import {faCirclePlay, faCirclePause,faBackwardStep, faForwardStep} from "@fortawesome/free-solid-svg-icons"; // ImportAR O TIPO DE ÍCONE
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useState } from 'react';
const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");
    const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`
};

const timeInSeconds = (timeString) => {
    const splitArray = timeString.split(':');
    const minutes = Number(splitArray[0]);
    const seconds = Number(splitArray[1]);

    return seconds + minutes * 60
};

const Player = ({duration, randomIdFromArtist, randomId2FromArtist, audio}) => {
    const audioPlayer = useRef();
    const progressBar = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(formatTime(0));
    const durationInSeconds = timeInSeconds(duration);
    const playPause = () => {
        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
        setIsPlaying(!isPlaying);
    }
    // Codigo do tempo da música
    useEffect(() => {
        const intervaId = setInterval(() => {
            setCurrentTime(formatTime(audioPlayer.current.currentTime));
            progressBar.current.style.setProperty('--_progress', 
                ((audioPlayer.current.currentTime / durationInSeconds) * 100) + "%");
        }, 1000);
        return () => clearInterval(intervaId);
    }, [isPlaying]);
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
                <div className="player__bar-progress" ref={progressBar}></div>
            </div>
            <p>{duration}</p>
        </div>
        <audio src={audio} ref={audioPlayer}></audio>
    </div>
  )
}

export default Player;
