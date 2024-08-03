import { useEffect, useState } from "react";
import ResturantCardComponent from "../shared/components/ResturantCard";

const HomeComponent = () => {
  let resturantDetails = [];
  const [listOfResturants, setListOfResturants] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchResturantData();
  }, []);

  const fetchResturantData = async () => {
    setIsLoading(true);
    fetch("/resturant.json")
      .then((response) => response.json())
      .then((data) => {
        resturantDetails = data.resturant;
        setListOfResturants(resturantDetails);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching the data:", error);
      });
  };

  function filterResturant() {
    const filterList = listOfResturants.filter(
      (resturant) => resturant.info.avgRating > 4
    );
    console.log("filterList", filterList);
    setListOfResturants(filterList);
  }

  function searchResturant() {
    console.log("Search resturant");
  }

  function resetResturant() {
    setListOfResturants(resturantDetails);
  }

  return (
    <div className="res-container">
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
          ></input>
          <button className="search-btn common-btn" onClick={searchResturant}>
            Search
          </button>
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-container">
          {listOfResturants?.map((hotel) => (
            <ResturantCardComponent key={hotel.info.id} resData={hotel} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
