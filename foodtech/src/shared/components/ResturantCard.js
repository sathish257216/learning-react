import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <div className="res-card" onClick={() => {navigate('/menu/' + resData?.info.id)}}>
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

export const withHighlyRatedResturantCardComponent = (ResturantCardComponent) => {
  return (props) => {
    return (
      <div className="higher-card">
        <ResturantCardComponent {...props} />
        <div className="highly-rated">Highly Rated</div>
      </div>
    )
  }
}

export default ResturantCardComponent;
