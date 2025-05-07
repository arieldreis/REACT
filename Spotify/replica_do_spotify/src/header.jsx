import React from 'react'
import imgSpotify from './assets/spotify-logo (1).png';
const header = () => {
  return (
    <header className='header'>
        <img src={imgSpotify} alt="Logo do Spotify" />
        <a href="/" className='header_link'>
            <h1>SPOTIFY</h1>
        </a>
    </header>
  );
}

export default header
