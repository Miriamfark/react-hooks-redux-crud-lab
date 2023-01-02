import React, { useState } from "react";
import Reviews from "./Reviews";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput() {

  const dispatch = useDispatch()

  const [text, setText] = useState("")

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleReviewSubmit(e) {
    e.preventDefault()
    dispatch(reviewAdded(text))
    setText("")
  }

  return(
  <div>
    <form onSubmit={handleReviewSubmit}>
      <p>
        <span>Comment</span>
        <input value={text} type="text" onChange={handleChange} />
      </p>
      <input type="submit" value="Add Review" />
    </form>
  </div>
  )
}

export default ReviewInput;
