import { useState, useEffect} from 'react';
import { getCharacters, getCharacter } from '../functions/function';
import Char from './Char';

function Personajes() {
  const [characters, setCharacter] = useState(null);
  const [char, setChar] = useState(null);
  
  useEffect(() => {
    getCharacters(setCharacter)
  }, [])
  if(char){
    setCharacter(null)
  }
  return (
    <div>
      {/* {characters? ("Hay personajes") : ("No hay personajes")} */}
      {characters? (
        characters.map(char => (
          <div className="App" key={char.id} onClick={() =>getCharacter( setChar, char.id )}>
            <div className=''>
              <img className='characters' src={char.image} alt={char.name} />
              <h3>{char.name}</h3>
            </div>
          </div>
        ))
        ) : ("No hay personajes")}
    </div>
  )
}
  

export default Personajes;