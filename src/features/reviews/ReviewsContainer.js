import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { useSelector } from "react-redux";

function ReviewsContainer() {

  const reviews = useSelector(state => state.reviews.entities)

  return (
    <div>
      <ReviewInput />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default ReviewsContainer;
