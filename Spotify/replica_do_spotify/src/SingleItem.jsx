import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Importar um ícone
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons"; // ImportAR O TIPO DE ÍCONE
import { Link } from 'react-router-dom';
const SingleItem = ({_id, image, name, banner, artist, idPath}) => {
  return (
    <Link to={`${idPath}/${_id}`} className='single-item'>
        <div className='single-item__div-image-button'>
            <div className='single-item__div-image'>
              <img src={image} alt={`Imagem do Artista ${name}`} className='single-item__image'/>
            </div>
            <FontAwesomeIcon icon={faCirclePlay} className='single-item__icon'/>
        </div>
          <div className='single-item__texts'>
            <div className='single-item__2lines'>
              <p className='single-item__title'>{name}</p>
            </div>
              <p className='single-item__type'>{artist ?? "Artista"}</p>
          </div>
      </Link>
  )
}

export default SingleItem;
