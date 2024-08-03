import { CDN_URL } from "../../utils/constant";


const ResturantCardComponent = (props) => {
  const { resData } = props;
  const { 
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId
  } = resData?.info;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="hotel-img"></img>
      <div className="hotel-details">
        <div className="hotel-name">
          <h4>{name}</h4>
          <span className="cuisine-name">{cuisines.join(", ")}</span>
        </div>
        <div className="hotel-rating">
          <h5>{avgRating} Star</h5>
          <h5>{sla.deliveryTime} min</h5>
          <h5>{costForTwo}</h5>
        </div>
      </div>
    </div>
  );
};

export default ResturantCardComponent;
