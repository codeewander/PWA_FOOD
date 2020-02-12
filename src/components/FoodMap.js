import React from 'react'
import {GoogleMap , withGoogleMap , withScriptjs } from 'react-google-maps'
import SearchBar from './SearchBar'

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
      <GoogleMap defaultZoom ={15} defaultCenter ={{lat : 22.99957, lng: 120.2128296}}/>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(FoodMap))

export default WrappedMap