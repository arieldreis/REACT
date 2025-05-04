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
  return (
    <>
      <Capa imagemCapa = {informacoesLivro.capa} textoAlternativo = {informacoesLivro.textoAlternativo}/>
    </>
  )
}
export default App
