import React, { useEffect, useState } from 'react';
import { Pokemon } from './types';

import InfoContainer from './components/InfoContainer';

import './app.css';
import {fetchPokemon} from "./utils";



const App = () => {
     const [pokemon, setPokemon] = useState<Pokemon>();
     const pokemons = ['dialga', 'palkia', 'darkrai', 'mewtwo', 'mew', 'articuno', 'regice' , 'regirock', 'registeel', 'kecleon', 'regigigas', 'groudon'];
     const randomPokemon = pokemons[Math.floor(Math.random()*pokemons.length)];
  useEffect(() => {
    fetchPokemon(randomPokemon).then((res) => setPokemon(res));
  }, []);


  return (
      <>
        <div className='appRoot'>
          <InfoContainer pokemon={pokemon}/>
        </div>
      </>
  );
};




export default App;

