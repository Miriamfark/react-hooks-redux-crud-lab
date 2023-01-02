import React from "react";
import Restaurant from "./Restaurant"

function Restaurants({ restaurants }) {

  console.log(restaurants)

  const mappedRestaurants = restaurants.map((restaurant) => {
    return <Restaurant key={restaurant.id} restaurant={restaurant}/>
  })

  return <ul>{mappedRestaurants}</ul>;
}

export default Restaurants;
