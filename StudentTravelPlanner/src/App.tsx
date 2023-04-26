import { useState } from 'react'

import './App.css'
import Layout from './Components/Layout/BaseLayout'
import LeftFilterMenu from './Components/LeftPanal/LeftFilterMenu'

function App() {
  return (
    <Layout>
      <div className='w-full md:flex justify-center items-center'>
      <button className="btn btn-secondary">Two</button>
          <div className='Left-Menu-Filter w-4/12 bg-red-400 rounded-lg px-5'><LeftFilterMenu /></div>
          <div className='Main-Map-content w-8/12 bg-gray-500 rounded-lg mx-1 px-5'>Map Content</div>
      </div>
    </ Layout>
  )
}

export default App
