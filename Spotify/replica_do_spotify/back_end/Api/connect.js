import {MongoClient} from 'mongodb'

const url = "mongodb+srv://arieldreis:Ariel2805.a@cluster0.ebafkt8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const cliente = new MongoClient(url);
export const database = cliente.db("SpotifyAudio");
const songCollection = await database.collection("songs").find({}).toArray();
console.log(songCollection);