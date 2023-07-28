import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "../constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isOnline] = useOnline();

  // const {user} = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  if(!isOnline){
    return <h1>❌ Sorry you are offline ❌</h1>
  }

  const getRestaurants = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json);
  };

  const searchHandler = (text) => {
    let filterList = restaurants.filter((item) => {
      return item?.data?.name?.toLowerCase().includes(text.toLowerCase());
    });

    setFilteredRestaurant(filterList);
  };

  {
    return restaurants.length == 0 ? (
      <Shimmer />
    ) : (
      <>
        <div className="w-full m-0 md:w-4/5 md:m-auto py-3 flex  justify-evenly items-center flex-col md:flex-row">
          <input
            type="text"
            placeholder="Search"
            className="search-list"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                searchHandler(searchText);
              }
            }}
          />
          <button onClick={() => searchHandler(searchText)}>Search</button>
        </div>
        <div className="restaurant-list">
          {filteredRestaurant.length == 0 ? (
            <h1>No restaurant found</h1>
          ) : (
            filteredRestaurant.map((restaurant) => {
              return (
                <Link to={'/restaurant/' + restaurant.info.id} key={restaurant.info.id}>
                  <RestaurantCard
                    {...restaurant?.info}
                    // user = {user}
                    key={restaurant?.info?.id}
                  />
                </Link>
              );
            })
          )}
        </div>
      </>
    );
  }
};

export default Body;
