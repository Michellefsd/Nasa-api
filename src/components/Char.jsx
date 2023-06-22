import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../functions/function';

function Char(char) {
    const params = useParams();
    useEffect(() => {
       getCharacter(params.id) 
    }, [])

  return (
    <div>
        <figure>
            <img src={char.image} alt={char.name} />
        </figure>
        <p>{char.name}</p>
        <p>{char.origin.name}</p>
        <p>{char.location.name}</p>
        <p>{char.gender}</p>
    </div>
  )
}

export default Char