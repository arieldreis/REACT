import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Importar um ícone
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons"; // ImportAR O TIPO DE ÍCONE
const SingleItem = ({id, image, name, banner}) => {
  return (
    <div className='single-item'>
        <div className='single-item__div-image-button'>
            <div className='single-item__div-image'>
              <img src={image} alt="Imagem do Artista x" className='single-item__image'/>
            </div>
            <FontAwesomeIcon icon={faCirclePlay} className='single-item__icon'/>
        </div>
          <div className='single-item__texts'>
            <div className='single-item__2lines'>
              <p className='single-item__title'>{name}</p>
            </div>
              <p className='single-item__type'>Artista</p>
          </div>
      </div>
  )
}

export default SingleItem;
