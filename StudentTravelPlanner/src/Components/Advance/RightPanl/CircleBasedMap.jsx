import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, Circle, InfoWindow, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';
import useStyles from './styles.js';
import mapStyles from './mapStyles.js';
import SampleJSON from "./smap.json"
// import { SkeletonText } from '@chakra-ui/react';

const containerStyle = {
  width: '100%',
  height: '90%'
};

const circleOptions = {
  strokeColor: "#000",
  strokeOpacity: 0.4,
  strokeWeight: 2,
  fillColor: "#000",
  fillOpacity: 0.25,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 5000 // 3 km
};

function CircleBasedMap({coords, setFilteredPlaces}) {
    const classes = useStyles();
    const [insideCoordinates, setInsideCoordinates] = useState([]);
    const [center, setCenter] = useState(coords);
    const mapRef = useRef()
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState(null)

    useEffect(() => {
      const timeout = setTimeout(()=> {
        const insideCoords = SampleJSON.filter(coord => {
          const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
            new window.google.maps.LatLng(coord.Cordinate),
            new window.google.maps.LatLng(center)
          );
          return  distance <= circleOptions.radius //coord;
        });
        setInsideCoordinates(insideCoords);
        setFilteredPlaces(insideCoords)
      }, 1000)
      return ()=> {
        clearTimeout(timeout)
      }
    }, [center]);
    

    function handleLoad(map) {
      mapRef.current = map;
    }
    
    function calculateAndDisplayRoute(destination) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route({
          origin: coords,
          destination: destination,//{ "lat": 19.041121, "lng": 72.861402 },
          travelMode: window.google.maps.TravelMode.DRIVING,

        }).then((response) => {
          setDirectionsResponse(response);
          // console.log(response.routes[0].legs[0].duration.text)
        }).catch((e) => window.alert("Directions request failed due to " + "status"));
      }
    

    const handleMapCenterChanged = () => {
      if (!mapRef.current) return;
      const newPos = mapRef.current.getCenter().toJSON();
      setCenter(newPos)
    }

  return (
    <div className={classes.mapContainer}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coords}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onCenterChanged={handleMapCenterChanged}
        onLoad={handleLoad}
        zoom={14}
        id="map"
      >
        {
          selectedMarker && (
            <InfoWindow
              position={selectedMarker.Cordinate}
              onCloseClick={() => {
                setDirectionsResponse(null)
                setSelectedMarker(null)
              }}
            >
              <div>
                <h3>{selectedMarker.college_name}</h3>
                <p>{selectedMarker.Description}</p>
                <p>Rating: <b>{selectedMarker.rating}/5</b></p>
                <div onClick={()=> calculateAndDisplayRoute(selectedMarker.Cordinate)}>Directions</div>
              </div>
            </InfoWindow>
          )
        }
        <Marker position={coords} icon="https://img.icons8.com/color/28/null/order-delivered.png" />
        <Circle
          center={center}
          options={circleOptions}
        />

          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        
        {
          insideCoordinates.map((val, index) => {
            return (<Marker key={index} position={val.Cordinate} onClick={()=> {
              console.log(val);
              // setuserLocation(val.Cordinate)
              setSelectedMarker(val);
            }}  />)
          })
        }

      </GoogleMap>
    </div>
  )
}

export default CircleBasedMap;