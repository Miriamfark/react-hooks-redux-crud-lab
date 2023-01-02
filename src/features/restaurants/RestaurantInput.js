import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {

  const [name, setName] = useState("")

  const dispatch = useDispatch()

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    dispatch(restaurantAdded(name))
    setName("")
  }

  return( 
  <div>
    <form onSubmit={handleFormSubmit}>
      <p>
        <label>Name</label>
        <input type="text" onChange={handleChange} value={name}/>
      </p>
      <input type="submit" value="Add Restaurant" />
    </form>
  </div>
  )
}

export default RestaurantInput;
