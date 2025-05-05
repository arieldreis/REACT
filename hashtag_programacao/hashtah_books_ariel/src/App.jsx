import './App.css';
import brasCubasImg from './assets/bras_cubas.jpeg'; // Importou essa img para o arquivo js
import Capa from './Capa';
/*k*/
function App() {
  const informacoesLivro = {
    nome: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis", 
    totalCapitulos: 2,
    capa: brasCubasImg,
    textoAlternativo: "Capa do Livro Memórias Póstumas de Brás Cubas.",
  };
  // Logo abaixo dentro do return estará todos os elementos html
  return (
    <>
      <Capa 
        imagemCapa = {informacoesLivro.capa} 
        textoAlternativo = {informacoesLivro.textoAlternativo}
      />
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