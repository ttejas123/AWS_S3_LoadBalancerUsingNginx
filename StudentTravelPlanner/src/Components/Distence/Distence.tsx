import { useContext, useState } from 'react'
import Layout from '../Layout/BaseLayout'
import Breadcrumb from '../BaseComponent/BreadCrumbs'
import { ThemeContext } from '../../context/ThemeContext'

function Distence() {
  const theame = useContext(ThemeContext);
  const [coords, setCoords] = useState({lat: 0, lng: 0});
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  return (
    <Layout transparent={theame.theme == "light"}>
      <div className='p-5'>
      <Breadcrumb active='Map' links={[{name: "Home", url: "/distance"}]}  />
      <div className='w-full md:flex justify-center items-center'>
          Distance
      </div>
      </div>
    </ Layout>
  )
}

export default Distence