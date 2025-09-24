const RestaurantCard = ({ resData }) => {
    console.log('resData: ', resData);
    let { name, cuisines, cloudinaryImageId, avgRatingString, costForTwo } = resData;

    return (
        <div className="res-card" >
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>Rating: {avgRatingString}</h5>
            <h5>Cost for Two: {costForTwo}</h5>
        </div>
    )
};

export default RestaurantCard;