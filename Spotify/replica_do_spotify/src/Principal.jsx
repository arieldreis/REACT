import React from 'react';
import ItemList from './ItemList';
import artistArray from "./assets/database/artists";
import songsArray from './assets/database/songs';

const principal = () => {
  return (
    <div className='main'>
      {/*Item list de Artistas*/}
      <ItemList title="Artistas" items={10} itemsArray={artistArray} path='/artists' idPath="artist"/>
      {/*Item list de Músicas*/}
      <ItemList title="Músicas" items={20} itemsArray={songsArray} path='/songs' idPath="song"/>
    </div>
  );
};

export default principal;


