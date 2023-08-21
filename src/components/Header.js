import { useState } from "react";
import {Link} from "react-router-dom";

const loggedInUser = () => {
  // API call to check authentication
  return true;
};

const Title = () => {
  return (
    <a href="/">
      <img
        alt="logo"
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AIyWJnv-qeoSVFHoDSoWPoYpqTm_vWoxcg&usqp=CAU"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li> 
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
