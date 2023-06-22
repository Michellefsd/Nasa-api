import '../index.css';
import imageRickMorty from '../img/rick-morty.png';
import { Link } from 'react-router-dom';

function Inicio() {
 
  return (
    <div className="App">
        <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
            <Link to='/personajes' className="btn-search">Buscar Personajes</Link>
      </header>
    </div>
  )
}

export default Inicio;