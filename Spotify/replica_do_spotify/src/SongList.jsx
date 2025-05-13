import React, { useState } from 'react';
import SongItem from './SongItem';
import songsArray from './assets/database/songs';

const SongList = ({ songsArray }) => {
  // Cria um estado chamado 'visibleSongs' que começa com 5 músicas visíveis
// 'setVisibleSongs' é a função usada para atualizar esse valor
  const [items, setItems] = useState(5);
  console.log(items, setItems)
  return (
    <div className="song-list">
      {songsArray
        .filter((_, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} key={index} index={index} />
        ))}
      <p
        className='song-list__see-more'
        onClick={() => setItems(items + 5)}
      >
        Ver Mais
      </p>
    </div>
  );
};

export default SongList;
