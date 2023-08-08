import { useEffect, useState } from "react";
import { resturantData } from "../constants";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";

const Body = () => {
  //let searchTxt = "KFC"

  const [searchInput,setSearchInput] = useState("KFC");
  const [resturants,setResturants] = useState([])

  // Empty Dependy Array : Once After Render
  // Dependency Array[serchText] : Once after initial render + Everytime after render (my searchText changes)

  useEffect(()=>{
    // API Call
    getRestaurants();
  },[]);

  async function getRestaurants () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5971854&lng=88.43705849999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Conditional chaining
    setResturants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  console.log("render");

  function filterResturant(searchInput,resturants) {
    let data = resturants.filter((res)=> (res.info.name.includes(searchInput)))
    return data;
  }

  return (resturants.length === 0) ? <Shimmer/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e)=>{
            //e.target.value
            setSearchInput(e.target.value)
          }}
        />
        <button className="search-btn" onClick={()=>{
           const getData = filterResturant(searchInput,resturants);
           setResturants(getData);
          }}>Search</button>
      </div>
      <div className="resturant-list">
        {resturants.map((resturant) => {
          return <ResturantCard {...resturant.info} key={resturant.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
