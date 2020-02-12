import React,{Fragment} from 'react'
// import styled from 'styled-components'
import {Paper, Tabs, Tab} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MapIcon from '@material-ui/icons/Map';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FaceIcon from '@material-ui/icons/Face';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Route,Link,NavLink } from "react-router-dom";
import FoodList from './FoodList'
import FoodMap from './FoodMap'
import Cart from './Cart'
import Account from './Account'



const useStyles = makeStyles({
  root: {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  zIndex:4
  },
  a:{
    width:'25%',
  },
  menuContainer:{
    background: '#499BA2',
    display:'flex',
    justifyContent:'space-around',
  },
  iconContainer:{
    color: '#fff',
  },
  link:{
    padding:'10px'
  },
  selected:{
    transform:'scale(1.3)'
  }
});


export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper square className={classes.menuContainer}>
       <NavLink to="/foodList" className={classes.link} activeClassName="selected">
         <div className={classes.iconContainer}><RestaurantIcon /></div>
      </NavLink>
      <NavLink to="/map" className={classes.link} activeClassName="selected">
        <div className={classes.iconContainer}><MapIcon /></div>
      </NavLink>
      <NavLink to="/cart" className={classes.link} activeClassName="selected">
        <div className={classes.iconContainer}><ShoppingBasketIcon /></div>
      </NavLink>
      <NavLink to="/account" className={classes.link} activeClassName="selected">
        <div className={classes.iconContainer}><FaceIcon /></div>
      </NavLink>
       {/* <Route path="/" render={({location})=>(
        <Fragment>
          <Tabs value={location.pathname} variant="fullWidth"
          indicatorColor="primary"
          textColor="secondary"
          aria-label="icon tabs example"
          className={classes.tabs}>
            <Tab icon={<RestaurantIcon />} aria-label="restaurant" className={classes.tab} component={FoodList} to="/foodList" />
            <Tab icon={<MapIcon />} aria-label="map" className={classes.tab} component={Map} to="/map" />
            <Tab icon={<ShoppingBasketIcon />} aria-label="shop" className={classes.tab} component={Cart} to="/cart" />
            <Tab icon={<FaceIcon />} aria-label="person" className={classes.tab} component={Account} to="/account" />
          </Tabs>
        </Fragment>
      )
      }/> */}
      </Paper>
    </div>
  )
}
