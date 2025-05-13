import {MongoClient} from 'mongodb'

const url = "mongodb+srv://arieldreis:Ariel2805.a@cluster0.ebafkt8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const cliente = new MongoClient(url);
/* 
👉 Cria o objeto client com base na URI. Esse objeto vai permitir:

Conectar com o banco

Acessar bancos e coleções

Fazer operações (buscar, inserir, deletar, etc.)
*/
export const database = cliente.db("SpotifyAudio"); // 👉 Agora que está conectado, você acessa o banco de dados SpotifyAudio.
const songCollection = await database.collection("songs").find({}).toArray();
/*
👉 Aqui você faz 3 coisas de uma vez:
db.collection("songs") → acessa a coleção chamada songs
.find({}) → busca todos os documentos (o {} significa “sem filtro”)
.toArray() → transforma o resultado em um array de objetos JavaScript
*/
console.log(songCollection);