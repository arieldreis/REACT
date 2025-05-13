import artistArray from '../../src/assets/database/artists.js'; // ✅ certo
import songsArray from '../../src/assets/database/songs.js';
import { database } from './connect.js';

const newArtistsArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = {...currentArtistObj};
    delete newArtistObj.id;

    return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongsObj) => {
    const newSongObj = {...currentSongsObj};
    delete newSongObj.id;

    return newSongObj;
});

const reponseSongs = await database.collection('songs').insertMany(newSongsArray);
const reponseArtists = await database.collection('artists').insertMany(newArtistsArray);


console.log(reponseArtists);
console.log(reponseSongs);