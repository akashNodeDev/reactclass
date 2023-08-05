// Named Import
import { IMG_CDN_URL } from "../constants";

const ResturantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
    //  console.log("Props=",props)
  
    return (
      <div className="card">
        <img
          src={
            IMG_CDN_URL+
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} Stars</h4>
      </div>
    );
  };

export default ResturantCard;