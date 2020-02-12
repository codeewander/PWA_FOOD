import React from 'react'
import Menu from '../components/Menu'
import FoodList from '../components/FoodList'
import WrappedMap from '../components/FoodMap'
import Cart from '../components/Cart'
import MapPage from './MapPage'
import Account from '../components/Account'
import { Switch, Route } from "react-router-dom";
export default function Main() {
  return (
    <>
      <Switch>
        <Route path="/foodList" component={FoodList}/>
        <Route path="/map" component={MapPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/account" component={Account} />
      </Switch>
      <Menu/>
    </>
  )
}
