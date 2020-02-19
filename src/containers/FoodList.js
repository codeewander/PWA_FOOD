import React from "react";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";

export default function FoodList() {
  const restaurantData = useSelector(state => state.restaurant.restaurantData);
  console.log(restaurantData);
  return (
    <>
      <SearchBar />
      <div style={{ paddingTop: "70px" }}>
        {restaurantData &&
          restaurantData.map(item => (
            <>
              <FoodCard data={item} key={item.id} />
            </>
          ))}
      </div>
    </>
  );
}
