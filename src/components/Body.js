import { useState } from "react";
import { resturantData } from "../constants";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

const Body = () => {
  //let searchTxt = "KFC"

  const [searchInput,setSearchInput] = useState("KFC");
  const [resturants,setResturants] = useState(resturantData)

  function filterResturant(searchInput,resturants) {
    let data = resturants.filter((res)=> (res.info.name.includes(searchInput)))
    return data;
  }

  return (
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
