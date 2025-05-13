// Java-Script Assincrono
// await async
// Fullfield

// import { MongoClient } from "mongodb";

// const uri = "mongodb+srv://arieldreis:Ariel2805.a@cluster0.ebafkt8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // URL DO MEU BANCO DE BANCO DE DADOS

// const client = new MongoClient(uri);
// /* 
// 👉 Cria o objeto client com base na URI. Esse objeto vai permitir:

// Conectar com o banco

// Acessar bancos e coleções

// Fazer operações (buscar, inserir, deletar, etc.)
// */
// async function testarConexao() { // Cria uma função assíncrona (com async), porque conectar ao banco e buscar dados são ações que demoram — ou seja, são promessas (promises).
//   try {
//     await client.connect(); // 👉 Aqui é onde a mágica acontece: você realmente se conecta ao MongoDB, Porém ele espera um pouco.
//     export const database = client.db("SpotifyAudio"); // 👉 Agora que está conectado, você acessa o banco de dados SpotifyAudio.
//     const songCollection = await database.collection("songs").find({}).toArray();
//     /*
//     👉 Aqui você faz 3 coisas de uma vez:
//     db.collection("songs") → acessa a coleção chamada songs
//     .find({}) → busca todos os documentos (o {} significa “sem filtro”)
//     .toArray() → transforma o resultado em um array de objetos JavaScript
//     */
//    console.log(songCollection)
//   } catch (e) {
//     console.error("🔴Erro ao buscar músicas:", err.message); // Se der erro em qualquer parte da função, o catch vai capturar e mostrar a mensagem do erro.
//   } finally {
//     await client.close();
//     /*
//         👉 Depois que tudo acabar (com erro ou sem erro), 
//         a conexão com o banco é fechada com client.close() — 
//         isso é super importante pra não ficar com conexões abertas à toa.
//     */
//   }
// }

// testarConexao();
