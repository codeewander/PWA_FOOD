import React,{ useState,useEffect } from 'react'
import { Map, Marker,Popup, TileLayer} from 'react-leaflet'
import SearchBar from './SearchBar'
import { Icon } from "leaflet";
import styled from 'styled-components'
import axios from 'axios'
import { getRestaurantData }from '../utils/API.js'
import MarkerClusterGroup from 'react-leaflet-markercluster';


const WrappedMap = styled(Map)`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index:1;
  `

function FoodMap (){
  const [userLocation, setUserLocation] =useState({lat:22.70, lng: 120.29})
  const [error,setError] = useState(null)
  const [markers , setMarkers] =useState([])
  useEffect(()=>{
    getUserLocation()
    getStoresData()
  },[])

  function getStoresData (){
    try{
      getRestaurantData
      .then(res =>{
        console.log(res.data)
        const points = res.data.map(item => [...item.coordinate.split(','), item.id])
        console.log(points)
        setMarkers(points)
      })
    }catch(e){
      console.log(e.message)
    }
  }

function getUserLocation(){
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position){
      setUserLocation({lat: position.coords.latitude, lng:position.coords.longitude})
    })
  }else{
    setError('Geolocation is not supported')
  }
}

  return (
    <WrappedMap center={userLocation} zoom={15} maxZoom={20}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {
          markers.map(item =>
            console.log(item)
            // <Marker position={item} key={item.index}/>
        )
        }
        <Marker position={[23.70, 120.29]}/>
        <Marker position={[23.697, 120.288]}/>
        <Marker position={[20.70, 100.29]}/>
        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[52.2297, 21.0122]} />
      </MarkerClusterGroup>
    </WrappedMap>
  )
}



export default FoodMap