import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext() //consumer

//provider
const PokemonContextprovider = ({children}) => {
    const [result, setResult] = useState({})
    
    const fetchdata = async(url)=>{
        const res = await axios.get(url)
        setResult(res.data)
        console.log(res)
    }

    useEffect(()=>{
        fetchdata("https://pokeapi.co/api/v2/item/")
    },[])

    const prev = () => {
        fetchdata(result.previous)
    }

    const next = () => {
        fetchdata(result.next)
    }
    return (
        <PokemonContext.Provider
            value={{
                result,
                prev,
                next
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextprovider