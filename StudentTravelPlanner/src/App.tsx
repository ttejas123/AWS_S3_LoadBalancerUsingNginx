import { useContext, useState } from 'react'

import './App.css'
import Advance from './Components/Advance/Advance'
import Distence from './Components/Distence/Distence';
import { NavigationContext } from './context/NavigationContext';

function App() {
  const {nav} = useContext(NavigationContext);
  return (
    <>
      {
        nav === 0 && (<Advance />)
      }

      {
        nav === 1 && (<Distence />)
      }

{
        nav === 2 && (<Distence />)
      }

{
        nav === 4 && (<Distence />)
      }
    </>
  )
}

export default App
