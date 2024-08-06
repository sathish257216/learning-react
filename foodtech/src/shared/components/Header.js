import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlieStatus = useOnlineStatus();
  const { userName } = useContext(UserContext);
  const onLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const cartItems = useSelector((store) => store.cart.items);

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
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
        </ul>
        <div className="btn-container">
          <button className="common-btn login-btn" onClick={onLogin}>
            {isLoggedIn ? "Logout" : ("Login " + userName)}
          </button>

          <button className={"common-btn "+ (onlieStatus ? "online-btn" : "offline-btn")}>
            {onlieStatus ? "Online" : "Offline"}
          </button>

        </div>
        
      </div>
    </header>
  );
};

export default HeaderComponent;
