import { useEffect, useRef, useState } from "react";
import ResturantCardComponent, { withHighlyRatedResturantCardComponent } from "../shared/components/ResturantCard";
import { RESTURANT_API_URL } from "../utils/constant";
import ShimmerComponent from "../shared/components/Shimmer";

const HomeComponent = () => {
  const resturantDetails = useRef(null);
  const [listOfResturants, setListOfResturants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  
  const HighlyRatedResturant = withHighlyRatedResturantCardComponent(ResturantCardComponent); 

  useEffect(() => {
    const fetchResturantData = async () => {
      setIsLoading(true);
      fetch(RESTURANT_API_URL)
        .then((response) => response.json())
        .then((data) => {
          resturantDetails.current = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          //console.log('resturantDetails --- ', data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants, resturantDetails);
          setListOfResturants(resturantDetails.current);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
          console.error("Error fetching the data:", error);
        });
    };

    fetchResturantData();
  }, []);

  /*const findField = (obj, field) => {
    for (const key in obj) {
      if (key === field && Array.isArray(obj[key]) && obj[key]?.length > 0) {
        return obj[key];
      } else if (typeof obj[key] === "object") {
        const result = findField(obj[key], field);
        if (result !== undefined) {
          return result;
        }
      }
    }
    return [];
  }*/


  function filterResturant() {
    const filterList = resturantDetails.current.filter(
      (resturant) => resturant.info.avgRating > 4
    );
    //console.log("filterList", filterList);
    setListOfResturants(filterList);
  }

  const searchResturant = () => {
    const filterList = resturantDetails.current.filter(
        (resturant) => resturant.info.name.toLowerCase().includes(searchText)
    );
    
    //console.log("filterList", filterList);
    setListOfResturants(filterList);
    console.log("Search resturant");
  }

  function resetResturant() {
    setListOfResturants(resturantDetails.current);
  }

  return (
    <div className="res-container">
        <div className="error-message">
            <p>{error}</p>
        </div>
        <div className="top-bar">
            <div className="filter-bar">
            <button className="filter-btn common-btn" onClick={filterResturant}>
                Top Rated
            </button>
            <button className="filter-btn common-btn" onClick={resetResturant}>
                Reset
            </button>
            </div>
            <div className="serach-bar">
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value= {searchText}
                onChange={(e) => {setSearchText(e.target.value)}}
            ></input>
            <button className="search-btn common-btn" onClick={searchResturant}>
                Search
            </button>
            </div>
        </div>
        {isLoading ? (
            <ShimmerComponent />
        ) : (
            <div className="card-container">
            {
              listOfResturants?.map((hotel) => (
                  hotel.info.avgRating > 4 ? <HighlyRatedResturant key={hotel.info.id} resData={hotel} /> :
                  <ResturantCardComponent key={hotel.info.id} resData={hotel} />
              ))
            }
            </div>
        )}
    </div>
  );
};

export default HomeComponent;
