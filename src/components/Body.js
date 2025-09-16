import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search food items..." />
                <button>Search</button>
            </div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.resId} resData = {restaurant.info} />
                ))}
            </div>
        </div>
    )
};

export default Body;