import './App.css';
import logo from './assets/images/foodtech-logo.png'; // Adjust the path accordingly


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

const CardComponent = () => {
  return (
    <div className="res-card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9b36a4e176674e135924d86470ad0785" alt="hotel-img"></img>
      <div className="hotel-details">
        <div className="hotel-name">
          <h3>Sea Shell</h3>
          <span>Briyani, Kabab, Shawarma</span>
        </div>
        <div className="hotel-rating">
          <h4>Rating</h4>
          <h4>30 min</h4>
          <h4>Rs.500</h4>
        </div>
      </div>
    </div>
  );
};

function searchResturant() {
  console.log('Search resturant');
}
const ResturantComponent = () => {
  return (
    <div className="res-container"> 
      <div className="serach-bar">
        <input type="text" className="search-input" placeholder="Search..." ></input>
        <button className="search-btn" onClick={searchResturant}>Search</button>
      </div>
      <div className="card-container">
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="app-container">
      <HeaderComponent></HeaderComponent>
      <ResturantComponent></ResturantComponent>
    </div>
  );
}

export default App;
