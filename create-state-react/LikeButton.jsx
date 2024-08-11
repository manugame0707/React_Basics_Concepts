import { useState } from "react";
export default function LikeButton() {
    let [clicks, setClicks] = useState(0);
    let [isLiked, setIsLiked] = useState(false);
    let toggleLike = () => {
        setClicks(clicks + 1);
        setIsLiked(!isLiked);
    }
    let styleheart = { color: "red" };
    return (
        <div>
            <p>Clicks={clicks}</p>
            <p onClick={toggleLike}>  {isLiked ? (<i className="fa-solid fa-heart" style={styleheart}></i>) : (<i className="fa-regular fa-heart"></i>)}</p>
        </div>
    );
}