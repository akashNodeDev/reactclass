import {useEffect} from "react";
import {useParams} from "react-router-dom";

const ResturantMenu = () => {

    // const params = useParams();
    // //console.log(params)
    // const {id} = params;
    // destructuring on the fly

    const {resId} = useParams();

    //  useEffect(() => {
    //     getResturantInfo();
    // },[])

    // async function getResturantInfo() {
    //     const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5971854&lng=88.43705849999999&restaurantId=540030&catalog_qa=undefined&submitAction=ENTER");

    //     const json = await data.json();
    //     console.log("Json Data=",json);
      
    // }

    return(
        <div>
            <h1>Resturant Id: {resId}</h1>
            <h2>VIP Sweets</h2>
        </div>
    )
}

export default ResturantMenu;