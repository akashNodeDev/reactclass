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
    return (
      <div className="header">
        <Title />
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;