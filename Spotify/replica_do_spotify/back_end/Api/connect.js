import {MongoClient} from 'mongodb'
const URI = "mongodb+srv://arieldreis:LKIYnYfls6xMmvSE@cluster0.ebafkt8.mongodb.net/SpotifyAudio?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

const db = client.db("SpotifyAudio");
const songCollection = await db.collection('songs').find({}).toArray();

console.log(songCollection);

// Java-Script Assincrono
// await async
// Fullfield