import React from 'react';
import SingleItem from './SingleItem';
import artistArray from "./assets/database/artists";
import songsArray from "./assets/database/songs";
import { Link } from 'react-router-dom';

const ItemList = ({title, items, itemsArray, path, idPath}) => {
  // ´props mostra todo o objeto
  console.log(items);
  return (
    <div className='item-list'>
      <div className='item-list__header'>
        <h2>{title} Populares</h2>
        <Link to={path} className='item-list__link'>Mostrar Todos</Link>
      </div>
      <div className='item-list__container'>
        {itemsArray
        .filter((currentValue, index) => index < items)
        .map((currentObj, index) => (
        <SingleItem 
          idPath={idPath}
          {...currentObj} // this atribute is gathering the objects.
          key={`${title}-${index}`}
        />
        ))}
      </div>
    </div>
  )
}

export default ItemList
