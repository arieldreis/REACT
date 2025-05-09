import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import ItemList from './ItemList';
const principal = () => {
  return (
    <div className='main'>
      <ItemList title="Artistas" items={10}/>
      <ItemList title="Músicas" items={20}/>
    </div>
  );
};

export default principal;


