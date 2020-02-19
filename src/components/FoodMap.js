import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import SearchBar from "./SearchBar";
import { Icon } from "leaflet";
import styled from "styled-components";
import axios from "axios";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { getRequest } from "../utils/API";
import { getRestaurantData } from "../redux/actions/action";

const WrappedMap = styled(Map)`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1;
`;

function FoodMap() {
  const [userLocation, setUserLocation] = useState({ lat: 22.7, lng: 120.29 });
  const [error, setError] = useState(null);
  const [markers, setMarkers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const setData = async () => {
      getUserLocation();
      const data = await dispatch(getRestaurantData());
      const markersInfo = data.map(item => item);
      console.log(markersInfo);
      await setMarkers(markersInfo);
    };
    setData();
  }, []);

  function getUserLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    } else {
      setError("Geolocation is not supported");
    }
  }

  return (
    <WrappedMap center={userLocation} zoom={10} maxZoom={20}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {markers.map(item => {
          let position = [
            Number(item.north_latitude),
            Number(item.east_longitude)
          ];
          console.log(position, item.id);
          return (
            <Marker position={position} key={item.id}>
              <Popup>
                <span>{item.name}</span>
                <br />
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </WrappedMap>
  );
}

export default FoodMap;
