import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Importar um ícone
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons"; // ImportAR O TIPO DE ÍCONE
import { Link } from 'react-router-dom';
const Artist = () => {
  return (
    <div className='artist'>
      <div className="artist__header" style={{
        backgroundImage: 
        'linear-gradient(to bottom, var(--_shade), var(--_shade), url(https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706))'
        }}></div>
      <div className="artist__body"></div>
      <Link to="/song/1">
        <FontAwesomeIcon icon={faCirclePlay} className='single-item__icon single-item__icon--artist'/>
      </Link>
    </div>
  )
}

export default Artist
