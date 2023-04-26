import { useContext, useState } from 'react'

import './App.css'
import Layout from './Components/Layout/BaseLayout'
import LeftFilterMenu from './Components/LeftPanal/LeftFilterMenu'
import Breadcrumb from './Components/BaseComponent/BreadCrumbs'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const theame = useContext(ThemeContext);
  return (
    <Layout transparent={theame.theme == "light"}>
      <div className='p-5'>
      <Breadcrumb active='Map' links={[{name: "Home", url: "/"}]}  />
      <div className='w-full md:flex justify-center items-center'>
          <div className='Left-Menu-Filter w-4/12 rounded-lg px-5'><LeftFilterMenu /></div>
          <div className='Main-Map-content w-8/12 rounded-lg px-5'>Map Content</div>
      </div>
      </div>
    </ Layout>
  )
}

export default App
