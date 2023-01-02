import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {

  const mappedReviews = reviews.map((review) => {
    return <Review key={review.id} review={review} />
  })
  return <ul>{mappedReviews}</ul>;
}

export default Reviews;
