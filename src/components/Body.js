import { restaurantList } from "../constants";
import RestrauntCard from "./RestrauntCard";
import {useState} from "react";

const filterData = (searchText,restaurants) => {
    const filterData = restaurants.filter((restaurant)=>{
        restaurant.data.name.includes(searchText);
    })
    return filterData;
    
}

const Body = () => {
    const [restaurants,setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");
    
    return (
        <>
       <div>
        <input 
        type="text"
        className="border"
        value={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value)
        }}
         />
        <button
        className="border border-yellow-900 px-10"
        onClick={()=>{
            const data = filterData(searchText,restaurants);
            setRestaurants(data);
            
        }}
        >Search</button>
       </div>
       <div className="flex flex-wrap justify-between">
       {restaurants.map((restaurant)=>{
        return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
        )
       })}

       </div>
       </>
    )
}
export default Body