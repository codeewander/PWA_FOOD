import React, { useEffect } from "react";
import Menu from "../components/Menu";
import FoodList from "./FoodList";
import WrappedMap from "../components/FoodMap";
import Cart from "../components/Filter";
import MapPage from "./MapPage";
import Account from "../components/Account";
import { Switch, Route } from "react-router-dom";
import { getRestaurantData } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurantData());
  }, []);

  return (
    <>
      <Switch>
        <Route path="/foodList" component={FoodList} />
        <Route path="/map" component={MapPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/account" component={Account} />
      </Switch>
      <Menu />
    </>
  );
}
