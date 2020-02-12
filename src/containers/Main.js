import React from 'react'
import Menu from '../components/Menu'
import FoodList from '../components/FoodList'
import WrappedMap from '../components/FoodMap'
import Cart from '../components/Cart'
import Account from '../components/Account'
import { Switch, Route } from "react-router-dom";
export default function Main() {
  return (
    <>
      <Switch>
        <Route path="/foodList" component={FoodList}/>
        <Route path="/map">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `calc(100vh - 48px)` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
        </Route>
        <Route path="/cart" component={Cart} />
        <Route path="/account" component={Account} />
      </Switch>
      <Menu/>
    </>
  )
}
