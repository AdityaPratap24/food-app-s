import React from "react";
import { IMG_CDN_URL } from "../constant";


const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravel,
  cloudinaryImageId,
  area,
  // user
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{area}</h3>
      <h4>{parseFloat(lastMileTravel).toFixed(2) + ' KM'}</h4>
      {/* <h5>{user.name}</h5> */}
    </div>
  );
};

export default RestaurantCard;
