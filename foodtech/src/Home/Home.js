import ResturantCardComponent from "../shared/components/ResturantCard";
import { hotelDetails } from "../utils/mockData";

function searchResturant() {
    console.log('Search resturant');
}

const HomeComponent = () => {
    return (
      <div className="res-container"> 
        <div className="serach-bar">
          <input type="text" className="search-input" placeholder="Search..." ></input>
          <button className="search-btn" onClick={searchResturant}>Search</button>
        </div>
        <div className="card-container">
          {
            hotelDetails.map(hotel => <ResturantCardComponent key={hotel.info.id} resData={hotel} />)
          }
        </div>
      </div>
    )
}

export default HomeComponent;