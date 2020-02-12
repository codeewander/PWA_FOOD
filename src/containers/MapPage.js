import React from 'react'
import WrappedMap from '../components/FoodMap'
import SearchBar from '../components/SearchBar'

export default function MapPage() {
  return (
    <div>
      <SearchBar/>
      <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `calc(100vh - 48px)` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
    </div>
  )
}
