/*ESSE É ARQUIVO PRINCIPAL ONDE ESTARÁ TODA A VISUALIZAÇÃO DO SITE.*/
import { useState} from 'react'; // Permite construir variavéis de estado.
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa o ícone do site do Bootstrape
import brasCubasImg from './assets/bras_cubas.jpeg'; // Importou essa img para o arquivo js
import Capa from './Capa';
import SeletorCapitulos from './SeletorCapitulos';
import BotoesControle from './BotoesControle'; // Importando os botões de controle
/*k*/
function App() {
  useState(); // É parecido com o innerHTML do JS.
  const informacoesLivro = {
    nome: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis", 
    totalCapitulos: 2,
    capa: brasCubasImg,
    textoAlternativo: "Capa do Livro Memórias Póstumas de Brás Cubas.",
  };
  /*
  No HTML normal, se você quer mudar um número ou texto na tela, tem que ir lá no DOM e trocar com innerText ou algo assim, né?
  No React, você cria uma variável de estado com useState, e aí o React cuida da mágica: toda vez que essa variável muda, ele re-renderiza o componente pra atualizar a tela.
  Variável de estado = valor que muda com o tempo e que, quando muda, o React atualiza a interface automaticamente.
  */
  // Logo abaixo dentro do return estará todos os elementos html
  return (
    <>
      <Capa 
        imagemCapa = {informacoesLivro.capa} 
        textoAlternativo = {informacoesLivro.textoAlternativo}
      />
      <SeletorCapitulos capituloAtual = {1} />
      <BotoesControle taTocando={taTocando}/>
    </>
  );
}
export default App
/*
"Props" é abreviação de "properties" (propriedades).
Pensa assim: você tem um componente que é tipo uma função, e você quer que ele receba uma informação de fora. 
Em vez de digitar essa info direto dentro dele, você passa via props, igual faz com parâmetros em funções no JavaScript.
*/
// mpm run dev = abrir o link do terminal