import React, { useState } from 'react'

function TravelModeChange() {
    const [travelMode, setTravelMode] = useState(0);
  return (
    <div className='flex justify-center items-center absolute z-20 right-1 -top-5 bg-base-200 rounded-full'>
        <div className={`rounded-full ${travelMode == 0 && "bg-base-300"} cursor-pointer transition-all delay-200 p-2.5`} onClick={()=> setTravelMode(0)} ><img src="https://img.icons8.com/material-outlined/31/ffffff/walking--v1.png"/></div>
        <div className={`rounded-full ${travelMode == 1 && "bg-base-300"} cursor-pointer transition-all delay-200  p-2.5`} onClick={()=> setTravelMode(1)} ><img src="https://img.icons8.com/ios-glyphs/30/ffffff/car--v1.png"/></div>
        <div className={`rounded-full ${travelMode == 2 && "bg-base-300"} cursor-pointer transition-all delay-200  p-2.5`} onClick={()=> setTravelMode(2)} ><img src="https://img.icons8.com/ios-glyphs/29/ffffff/cycling-road.png"/></div>
        <div className={`rounded-full ${travelMode == 3 && "bg-base-300"} cursor-pointer transition-all delay-200  p-2.5`} onClick={()=> setTravelMode(3)} ><img src="https://img.icons8.com/ios-filled/29/ffffff/train.png"/></div>
    </div>
  )
}

export default TravelModeChange