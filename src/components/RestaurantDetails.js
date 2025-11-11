import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL, IMAGE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
    const { id } = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState([]);

    useEffect(() => {
        async function fetchRestaurantDetails() {
            let fetchUrl = `${API_URL}&restaurantId=${id}`;
            console.log('fetchUrl: ', fetchUrl);
            const response = await fetch(fetchUrl);
            console.log('response: ', response);
            const responseData = await response.json();
            const data = responseData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
            console.log('data: ', data);
            setRestaurantDetails(data);
        }
        fetchRestaurantDetails();
    }, []);

    if (restaurantDetails.length == 0) return <Shimmer />

    return (
        <div className="res-details-container w-50p m-auto">
            <h3>{restaurantDetails.title}</h3>
            {
                restaurantDetails.itemCards.map((item) => (
                    <div key={item.card.info.id} className="flex pt-xl pb-xl res-details">
                        <div className="w-70p">
                            <h4 className="mt-sm fs18">{item.card.info.name}</h4>
                            <h5 className="mt-sm fs16">₹ {item.card.info.price / 100}</h5>
                            <h6 className="mt-sm fs14">{item.card.info.ratings.aggregatedRating.rating}({item.card.info.ratings.aggregatedRating.ratingCountV2})</h6>
                            <p className="mt-md fs16">{item.card.info.description}</p>
                        </div>
                        <img src={IMAGE_URL + item.card.info.imageId} className="res-details-image rounded-md"/>
                    </div>
                ))
            }
        </div>
    )
};

export default RestaurantDetails;