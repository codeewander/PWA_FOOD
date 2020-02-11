import React from 'react'
import Menu from '../components/Menu'
import FoodList from '../components/FoodList'
import Map from '../components/Map'
import Cart from '../components/Cart'
import Account from '../components/Account'
import { Switch, Route } from "react-router-dom";
export default function Main() {
  return (
    <>
      <Switch>
        <Route path="/foodList" component={FoodList}/>
        <Route path="/map" component={Map} />
        <Route path="/cart" component={Cart} />
        <Route path="/account" component={Account} />
      </Switch>
      <Menu/>
    </>
  )
}
