import React from "react";

const Shimmer = () => {
    return(
        <div className="restaurant-list">
            {Array(10).fill("").map((ele,index) => {
                return <div className="shimmer-card"></div>
            })}
        </div>
    )
}

export default Shimmer;