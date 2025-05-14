import React from 'react';
import ItemList from './ItemList';
import {artistArray} from './assets/database/artists.js';
import {songsArray } from './assets/database/songs.js';

const principal = ({type}) => {
  return (
    <div className='main'>
      {/*Item list de Artistas*/}
      {
        type === "artists" || type === undefined ? (<ItemList 
        title="Artistas" 
        items={20} 
        itemsArray={artistArray} 
        path='/artists' 
        idPath="artist"
        />): (<></>
      )}
      {/*Item list de Músicas*/}
      {
        type === "songs" || type === undefined ? (<ItemList 
        title="Músicas" 
        items={100} 
        itemsArray={songsArray} 
        path='/songs' 
        idPath="song"
      />) : (<></>
      )}
    </div>
  );
};

export default principal;


