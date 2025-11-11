import RestaurantCard from "./RestaurantCard";
import resList1 from "../utils/mockData1";
import resList2 from "../utils/mockData2";
import resList3 from "../utils/mockData3";
import resList4 from "../utils/mockData4";
import resList5 from "../utils/mockData5";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchValue, setSearchValueRestaurants] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const resLists = {
        1: resList1,
        2: resList2,
        3: resList3,
        4: resList4,
        5: resList5,
    };

    const getApiUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8332225&lng=80.0427797&restaurantId=62212";

    // useEffect(() => {
    //     async function fetchData() {
    //         let jsonData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8332225&lng=80.0427797&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //         let json = await jsonData.json();
    //         const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //         setListOfRestaurants(restaurants);
    //         setFilteredRestaurants(restaurants);
    //     }
    //     // fetchData();

        

    //     async function sendUserData() {
    //         try {
    //             const response = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/update", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "x-csrf-token": "4uV3YMRhbKeL-dWpRZLfcNDCCPYzWOEjlWfsMW0k" // usually passed as header, not inside body
    //                 },
    //                 body: JSON.stringify({
    //                     lat: 12.8332225,
    //                     lng: 80.0427797,
    //                     nextOffset: "CJhlELQ4KIDYlvzYv+SiATCnEzgB",
    //                     widgetOffset: {
    //                     "NewListingView_category_bar_chicletranking_TwoRows": "",
    //                     "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
    //                     "Restaurant_Group_WebView_SEO_PB_Theme": "",
    //                     "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "9",
    //                     "inlineFacetFilter": "",
    //                     "restaurantCountWidget": ""
    //                     },
    //                     filters: {},
    //                     seoParams: {
    //                     seoUrl: "https://www.swiggy.com/restaurants",
    //                     pageType: "FOOD_HOMEPAGE",
    //                     apiName: "FoodHomePage",
    //                     businessLine: "FOOD"
    //                     },
    //                     page_type: "DESKTOP_WEB_LISTING"
    //                 })
    //             });


    //             const data = await response.json();
    //             console.log("Success:", data);
    //         } catch (error) {
    //             console.error("Error:", error);
    //         }
    //     }
    //     // sendUserData();
    // });

    useEffect(() => {
        fetchItems();

        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= (document.documentElement.scrollHeight - 100)) {
                fetchItems();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (currentPage === 0) return; // skip initial render
        // setTimeout(updateResList, 5000);
        updateResList();
    }, [currentPage]);

    function fetchItems() {
        setCurrentPage(prevPage => prevPage + 1);
    }

    function updateResList() {
        const resData = resLists[currentPage];
        const restaurants = resData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        const totalRestaurants = [...listOfRestaurants, ...restaurants]
        setListOfRestaurants(totalRestaurants);
        setFilteredRestaurants(totalRestaurants);
    }

    function searchHandler() {
        let filtered = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredRestaurants(filtered);
    }

    function clearFilterHandler() {
        setSearchValueRestaurants("");
        setFilteredRestaurants(listOfRestaurants);
    }
    
    if (listOfRestaurants.length == 0) return <Shimmer />

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
                    <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} className="text-decoration-none">
                        <RestaurantCard resData={restaurant.info} />
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default Body;