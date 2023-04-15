import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import CountComponent from './count'
import { PokemonContext } from './context/PokemonDataContext'

function App() {
  const [count,setCount]=useState(0)
  const manipulation = (state)=>{
      (state == true) ? setCount(count+1) : setCount(count-1) 
  }
  
  const {result, next, previous} = useContext(PokemonContext)
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=> manipulation(true)}>
          count is {count}
        </button>
        <button onClick={()=> manipulation(false)}>
        
          Decrised {count}
        </button>
        <br />
        {
          result.results && result.results.map((val,index)=>{
            return(
              <>
              {val.name}<br/>
              </>
            )
          })
        }
        <button onClick={previous}>
          Pre
        </button>
        <button onClick={next}>
        
         Next
        </button>
        <br />
        <CountComponent/>
      

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
