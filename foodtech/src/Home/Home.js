import { useState } from "react";
import ResturantCardComponent from "../shared/components/ResturantCard";
import { hotelDetails } from "../utils/mockData";


const HomeComponent = () => {
    const [listOfResturants, setListOfResturants] = useState(hotelDetails);

    
    function filterResturant() {
        const filterList = listOfResturants.filter(resturant => resturant.info.avgRating > 4);
        console.log('filterList', filterList);
        setListOfResturants(filterList);
    }
    
    function searchResturant() {
        console.log('Search resturant');
    }

    function resetResturant() {
        setListOfResturants(hotelDetails);
    }

    return (
      <div className="res-container"> 
        <div className="top-bar">
            <div className="filter-bar">
                <button className="filter-btn common-btn" onClick={filterResturant}>Top Rated</button>  
                <button className="filter-btn common-btn" onClick={resetResturant}>Reset</button>  
            </div>
            <div className="serach-bar">
                <input type="text" className="search-input" placeholder="Search..." ></input>
                <button className="search-btn common-btn" onClick={searchResturant}>Search</button>
            </div>
        </div>
        <div className="card-container">
          {
            listOfResturants?.map(hotel => <ResturantCardComponent key={hotel.info.id} resData={hotel} />)
          }
        </div>
      </div>
    )
}

export default HomeComponent;