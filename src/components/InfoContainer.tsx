import React from 'react';
import PokeMove from './PokeMove'
import { Pokemon } from '../types';

interface Props {
  pokemon?: Pokemon;
}

const InfoContainer: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    return (
      <div className='infoContainer'>
        <h1 className="pokename">{pokemon.name}</h1>
        <div className="image-container">
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        </div> <div className="meta-list">
          <p className="meta"><span className="bold">BaseExp:</span>     {pokemon.base_experience}<span className="bold">Weight:</span> {pokemon.weight} <span className="bold">Height:</span> {pokemon.height}</p>
        </div>
        <div className="panel">
          <h3 className="moves">Moves:</h3>
          <ul>
              {pokemon.moves.map((move, index) => {
              return <PokeMove move={move} key={index} />
          }).filter((e, i) => i < 3)}
          </ul>
        </div>
      </div>
    );
  }
  return null;
};
export default InfoContainer;
