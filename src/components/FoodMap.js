import React from 'react'
import { Map, Marker,Popup, TileLayer} from 'react-leaflet'
import SearchBar from './SearchBar'
import { Icon } from "leaflet";
import styled from 'styled-components'

const WrappedMap = styled(Map)`
  height: 100vh;
  width: 100%;
  `

function FoodMap (){

  //get user's location
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(getPosition, positionError, {
            enableHighAccuracy: false,
            timeout: 15000,
            maximumAge: 0
        })
  }

  function getPosition(position){
    console.log(position.coords)
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
  }

  function positionError(error){
    switch(error.code){
      case error.PERMISSION_DENIED:
          console.error( "User denied the request for Geolocation." );
          break;
      case error.POSITION_UNAVAILABLE:
          console.error( "Location information is unavailable." );
          break;
      case error.TIMEOUT:
          console.error( "The request to get user location timed out." );
          break;
      case error.UNKNOWN_ERROR:
          console.error( "An unknown error occurred." );
          break;
    }
  }

  return (
    <WrappedMap center={[22.7136, 120.295]} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </WrappedMap>
  )
}

export default FoodMap