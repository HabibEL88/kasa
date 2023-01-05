import React from "react";

//Styles
import redStar from "../assets/redStar.svg";
import greyStar from "../assets/greyStar.svg";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<img src={redStar} alt="" />);
    } else {
      stars.push(<img src={greyStar} alt="" />);
    }
  }
  return <div className="rating">{stars}</div>;
};

export default Rating;
