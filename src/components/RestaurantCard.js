import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    let { name, cuisines, cloudinaryImageId, avgRatingString, costForTwo } = resData;

    return (
        <div className="res-card" >
            <img className="res-logo" src={IMAGE_URL + cloudinaryImageId} alt="res-logo" />
            <h3 className="ellipsis">{name}</h3>
            <h5 className="ellipsis">{cuisines.join(", ")}</h5>
            <h5>Rating: {avgRatingString}</h5>
            <h5>Cost for Two: {costForTwo}</h5>
        </div>
    )
};

export default RestaurantCard;