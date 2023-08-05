import React from "react";
import ReactDOM from "react-dom/client";
// Default import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      {/**
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
       */}
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
