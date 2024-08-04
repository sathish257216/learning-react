import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="app-header">
      <img src={process.env.PUBLIC_URL + '/favicon.png'} className="app-logo" alt="logo" />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <button className="common-btn login-btn" onClick={onLogin}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
