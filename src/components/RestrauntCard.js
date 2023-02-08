import {IMG_CDN_URL} from "../constants";

const RestrauntCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-yellow-200">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

export default RestrauntCard