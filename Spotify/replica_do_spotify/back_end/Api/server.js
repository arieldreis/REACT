// API significa Aplication Programming Interface
// Requisição do tipo GET, POST, PUT, DELETE
// CRUD -> CREATE READ UPDATE DELETE
// ENDPOINT
import express from 'express'
import artistArray from '../../src/assets/database/artists.js'; // ✅ certo
import songsArray from '../../src/assets/database/songs.js'
const app = express();
/*
Ela cria uma instância do servidor Express, que você vai usar pra definir rotas, middlewares, respostas etc.
📌 Pensa assim:
Você tá dizendo: "express, bora montar meu servidor a partir de agora!"
E aí guarda tudo isso na variável app.
*/

const PORT = 3001;
// Exemplo de rota
/*
🧠 Que que tá rolando aqui?
'/' → é o caminho da rota (nesse caso, a raiz do site).

(req, res) → são os objetos que representam a requisição (pedido) e a resposta.

res.send('...') → envia a resposta pro navegador ou pro front-end.
*/
app.get('/', (request, response) => {
    response.send("<h3>Só vamos trabalhar com os endpoints '/songs' e '/artist'</h3>");
});
// Alguém bate na porta 🚪
app.get('/artists', (request, response) => {
    response.send(artistArray);
});
app.get('/songs', (request, response) => {
    response.send(songsArray);
});
app.listen(PORT, () => {
    // Code of function
    console.log(`Servidor escutando na porta ${PORT}`);
});
// Porta aberta ✅

// node --watch ./Api/server.js 
// Esse comando eu não preciso ficar matando o servidor toda hora.