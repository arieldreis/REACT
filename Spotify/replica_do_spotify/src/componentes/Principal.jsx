import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import ItemList from './ItemList';

const principal = () => {
  return (
    <div className='main'>
      {/*Item list de Artistas*/}
      <ItemList title="Artistas" items={5}/>
      {/*Item list de Músicas*/}
      <ItemList title="Músicas" items={10}/>
    </div>
  );
};

export default principal;


