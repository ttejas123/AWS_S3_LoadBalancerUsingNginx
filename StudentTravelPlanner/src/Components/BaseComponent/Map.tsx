import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, Circle, InfoWindow, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';
import useStyles from './styles.js';
import mapStyles from './mapStyles.js';
import SampleJSON from "./smap.json"
// import { SkeletonText } from '@chakra-ui/react';

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '90%'
};

const circleOptions: google.maps.CircleOptions = {
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

type CircleBasedMapProps = {
  coords: google.maps.LatLngLiteral;
  setFilteredPlaces: any;
}

function CircleBasedMap({coords, setFilteredPlaces}: CircleBasedMapProps) {
    const classes:any = useStyles();
    const [insideCoordinates, setInsideCoordinates] = useState<any[]>([]);
    const [center, setCenter] = useState<google.maps.LatLngLiteral>(coords);
    const mapRef = useRef<any>(null)
    const [selectedMarker, setSelectedMarker] = useState<any>(null);
    const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null)

    useEffect(() => {
      const timeout = setTimeout(()=> {
        const insideCoords = SampleJSON.filter((coord: any) => {
          const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
            new window.google.maps.LatLng(coord.Cordinate),
            new window.google.maps.LatLng(center)
          );
          return  distance <= (circleOptions.radius ? circleOptions.radius : 0) //coord;
        });
        setInsideCoordinates(insideCoords);
        setFilteredPlaces(insideCoords)
      }, 1000)
      return ()=> {
        clearTimeout(timeout)
      }
    }, [center, setFilteredPlaces]);

    function handleLoad(map: google.maps.Map) {
      mapRef.current = map;
    }

    function calculateAndDisplayRoute(destination: google.maps.LatLngLiteral) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route({
          origin: coords,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        }).then((response) => {
          setDirectionsResponse(response);
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