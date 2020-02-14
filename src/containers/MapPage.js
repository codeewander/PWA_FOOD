import React from 'react'
import WrappedMap from '../components/FoodMap'
import SearchBar from '../components/SearchBar'

export default function MapPage() {
  return (
    <div>
      <SearchBar/>
      <WrappedMap/>
    </div>
  )
}
