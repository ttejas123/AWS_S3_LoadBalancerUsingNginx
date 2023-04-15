import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PokemonContextprovider from './context/PokemonDataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonContextprovider><App /></PokemonContextprovider>
  </React.StrictMode>,
)
