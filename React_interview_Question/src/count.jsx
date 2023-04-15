import React, { useContext } from 'react';
import { PokemonContext } from './context/PokemonDataContext';

const CountComponent = () =>  {
    
    const {result} = useContext(PokemonContext);
    return <>
        {result.count}
    </>
}

export default CountComponent