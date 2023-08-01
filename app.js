import React from "react";
import ReactDOM from "react-dom/client"

const Title = () => {
    return (
        <a href="/">
            <img alt="logo" className="logo" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AIyWJnv-qeoSVFHoDSoWPoYpqTm_vWoxcg&usqp=CAU" />
        </a>
    )
}

const Header = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const burgerKing = {
    name:"Domino's",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/be66rnc0tj2jgdadiviu",
    cusines:["Burger","American"],
    rating:"4.2"
}

const ResturantCard = () => {
    return (
        <div className="card">
            <img src={burgerKing.image}/>
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(", ")}</h3>
            <h4>{burgerKing.rating} Stars</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="resturantList">
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
        </div>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const AppLayout = () => {
    return (
        <>
          {
            /**
             * Header
             *  - Logo
             *  - Nav Items(Right Side)
             *  - Cart
             * Body
             *  - Search Bar
             *  - ResturantList
             *      - Resturant Card
             *          - Image
             *          - Name
             *          - Rating
             *          - Cusines
             * Footer
             *  - Links
             *  - Copyright
             * 
             */
        }
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

