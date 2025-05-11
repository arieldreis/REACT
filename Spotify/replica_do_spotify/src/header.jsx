import React from 'react'
import imgSpotify from './assets/spotify-logo (1).png';
import { Link } from 'react-router-dom';
const header = () => {
  return (
    <header className='header'>
        <Link to="/">
          <img src={imgSpotify} alt="Logo do Spotify" />
        </Link>
        <Link to="/" className='header_link'>
              <h1>SPOTIFY</h1>
        </Link>
    </header>
  );
}

export default header
