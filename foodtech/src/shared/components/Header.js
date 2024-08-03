import logo from './../../assets/images/foodtech-logo.png';

const HeaderComponent = () => {
    return (
      <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>cart</li>
            </ul>
          </div>
      </header>
    );
}

export default HeaderComponent;
  