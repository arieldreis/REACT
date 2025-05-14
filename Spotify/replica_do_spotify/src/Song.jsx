import React from 'react'
import Player from './Player'
import {artistArray} from './assets/database/artists.js';
import {songsArray } from './assets/database/songs.js';
import { Link, useParams } from 'react-router-dom'
const Song = () => {
  const {id} = useParams(); // Irá mostrar o is da música
   // teste {image, name, duration, artist, audio}
  const {image, name, duration, artist, audio} = songsArray.filter((currentSongObj) => currentSongObj._id === id)[0];
  const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj.name === artist)[0];
  const songsArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artistObj.name);
  // Logo abaixo estará o sistema de música aleatória
  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length -  1));
  const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length -  1));

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} style={{borderRadius: '10px'}}/>
        </div>
      </div>
      <div className="song__bar">
        <Link className='song_artist__image' to={`/artist/${artistObj._id}`}>
          <img 
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista: ${artist}}`}
            style={{borderRadius: '5px'}} 
          />
        </Link>
        <Player duration={duration} 
        randomIdFromArtist={randomIdFromArtist} 
        randomId2FromArtist={randomId2FromArtist}
        audio={audio}
        />
        <div>
          <p className='song__name'>{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song
