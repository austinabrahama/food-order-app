const RestaurantCard = ({ resData }) => {
    let { name, cuisine, image: { url }, rating: { aggregate_rating }, cft : { text } } = resData;
    let cuisineList = cuisine.map((item) => item.name);

    return (
        <div className="res-card">
            <img className="res-logo" src={url} alt="res-logo" />
            <h3>{name}</h3>
            <h5>{cuisineList.join(", ")}</h5>
            <h5>Rating: {aggregate_rating}</h5>
            <h5>Cost for Two: {text}</h5>
        </div>
    )
};

export default RestaurantCard;