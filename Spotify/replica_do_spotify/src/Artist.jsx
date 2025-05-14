import React, { use } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Importar um ícone
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons"; // ImportAR O TIPO DE ÍCONE
import { Link, useParams } from 'react-router-dom';
import SongList from './SongList';
import {artistArray} from './assets/database/artists.js';
import {songsArray } from './assets/database/songs.js';
const Artist = () => {
  const {id} = useParams(); // Ele mostra o id no qual se localiza
  const {name, banner} = artistArray.filter((currentArtistObj) => currentArtistObj._id === id)[0];
  // Filtra o array de artistas e pega o primeiro artista com o id igual ao recebido (convertido para número)
  const songsArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === name);
  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length -  1));
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  return (
    <div className='artist'>
      <div
        className="artist__header"
        style={{backgroundImage:`linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`}}
      >
        <h2 className='artist__title'>{name}</h2>
      </div>
      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist}/>
      </div>
      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon 
          icon={faCirclePlay} 
          className='single-item__icon single-item__icon--artist'
        />
      </Link>
    </div>
  )
}

export default Artist
