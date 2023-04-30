import { useContext, useEffect, useState } from 'react'
import Layout from '../Layout/BaseLayout'
import Breadcrumb from '../BaseComponent/BreadCrumbs'
import { ThemeContext } from '../../context/ThemeContext'
import CircleBasedMap from '../../Components/Advance/RightPanl/CircleBasedMap.jsx';

function Distence() {
  const theame = useContext(ThemeContext);
  const [coords, setCoords] = useState({lat: 0, lng: 0});
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);
  return (
    <Layout transparent={theame.theme == "light"}>
      <div className='p-5'>
        <Breadcrumb active='Distance' links={[{name: "Home", url: "/"}]}  />
        <div className='w-full md:flex justify-center items-center'>
            <CircleBasedMap setFilteredPlaces={setFilteredPlaces} coords={coords} />
        </div>
      </div>
    </ Layout>
  )
}

export default Distence