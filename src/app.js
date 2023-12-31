import React from "react";
import ReactDOM from "react-dom/client";
// Default import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
import Error from "./components/Error";
import Profile from "./components/Profile";
import { createBrowserRouter,RouterProvider,Outlet  } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/resturant/:resId",
        element:<ResturantMenu/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
