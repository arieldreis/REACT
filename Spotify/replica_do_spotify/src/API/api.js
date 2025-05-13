// fetch() ou Axios()
import axios from 'axios';

const URL = "http://localhost:3001";
// Como fazer uma requisição de Api em Java-Script
const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;


console.log(responseArtists.data);