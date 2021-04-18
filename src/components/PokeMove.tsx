import React, { useEffect, useState } from 'react';
import { fetchMove } from '../utils';


const InfoContainer: React.FunctionComponent<any> = ({ move }) => {
    const [pokeMove, setMove] = useState<any>();


    useEffect(() => {
        fetchMove(move.move.url).then((res) => setMove(res));
    }, []);
  
    if (pokeMove) {
        return (
            <li className="move">
                <div className="info">
                    <h4>{pokeMove.name}</h4>
                    <p>{pokeMove.flavor_text_entries[0].flavor_text}{pokeMove.effect_entries[0].effect.replace("$effect_chance%", `${pokeMove.effect_chance}%`)}</p>
                </div>
                {() => { 
                    if (pokeMove.accuracy) {
                        return (
                            <div className="accuracy">
                                <p className="bold">Accuracy:</p>
                                <p>{pokeMove.accuracy}%</p>
                            </div>
                        )
                    } 
                    else return null
                }}
            </li>
        );
    }
  return null;
};
export default InfoContainer;