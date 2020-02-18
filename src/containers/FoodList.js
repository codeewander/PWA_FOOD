import React from 'react'
import FoodCard from '../components/FoodCard'
import SearchBar from '../components/SearchBar'

export default function FoodList() {
  return (
    <div>
      <SearchBar/>
      <div style={{paddingTop:'60px'}}>
        <FoodCard/>
      </div>
    </div>
  )
}
