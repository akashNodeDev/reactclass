import {Outlet} from "react-router-dom";

const About = () => {
    return (
        <div>
          <h4> This is About Us Page </h4>
          <p>The react-router-dom package contains bindings for using React Router in web applications. Please see the Getting Started guide for more information on how to get started with React Router.</p>
          <Outlet/>
        </div>
    )
}

export default About;