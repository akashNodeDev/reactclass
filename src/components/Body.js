import { useEffect, useState } from "react";
//import { resturantData } from "../constants";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";

const Body = () => {

  // Avoid rendering a component

  const [filteredResturants,setFilteredResturants] = useState([]);
  const [allResturants,setAllResturants] = useState([]);
  const [searchInput,setSearchInput] = useState([]);

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
    console.log("check=",json);
    // Conditional chaining
    setAllResturants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredResturants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  console.log("render");

  function filterData(searchInput,resturants) {
    let data = resturants.filter((res)=> (res?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())))
    return data;
  }

  // conditional rendering
 // console.log("Resturant Length=",resturants.length)

 // Early return : Early return   

  if(!allResturants) return null;

  return (allResturants.length === 0) ? <Shimmer/> : (
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
           const getData = filterData(searchInput,allResturants);
           setFilteredResturants(getData);
          }}>Search</button>
      </div>
      <div className="resturant-list">
        {(filteredResturants.length ===0) ? (<h1>No Resturant Found With This Name</h1>) :filteredResturants.map((resturant) => {
          return <ResturantCard {...resturant.info} key={resturant.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
