import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchValue, setSearchValueRestaurants] = useState("");

    useEffect(() => {
        async function fetchData() {
            let jsonData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8332225&lng=80.0427797&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            let json = await jsonData.json();
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        }
        fetchData();
    }, []);

    function searchHandler() {
        let filtered = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredRestaurants(filtered);
    }

    function clearFilterHandler() {
        setSearchValueRestaurants("");
        setFilteredRestaurants(listOfRestaurants);
    }
    
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search food items..." value={searchValue} onChange={(event) => {
                    setSearchValueRestaurants(event.target.value);
                }}/>
                <button onClick={searchHandler} className="ml-10">Search</button>
                <button onClick={clearFilterHandler} className="ml-10">Clear</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
                ))}
            </div>
        </div>
    )
};

export default Body;