import React from "react";

import FoodListings from "./food-listings";

const FoodCalc = (props) => {
    return (
        <div className="calc-wrapper">
            {/* inputs */}
            <FoodListings />
            {/* outputs (chart with totals off to side) */}
        </div>
    );
};

export default FoodCalc;
