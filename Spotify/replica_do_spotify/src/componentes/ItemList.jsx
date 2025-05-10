import React from 'react';
import SingleItem from './SingleItem';
import {artistArray} from './assets/database/artists.js'

const ItemList = ({title, items}) => {
  // ´props mostra todo o objeto
  console.log(items);
  return (
    <div className='item-list'>
      <div className='item-list__header'>
        <h2>{title} Populares</h2>
        <a href="/" className='item-list__link'>Mostrar Todos</a>
      </div>
      <div className='item-list__container'>
        {Array(items)
        .fill()
        .map((currentValue, index) => (
        <SingleItem key={`${title}-${index}`}/>
        ))}
      </div>
    </div>
  )
}

export default ItemList
