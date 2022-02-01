import React, { useState } from "react";

import FoodListings from "./food-listings";
import FoodInputForm from "./food-input-form";

const FoodCalcPage = (props) => {
    const [selectedFood, setSelectedFood] = useState({});

    return (
        <div className="calc-wrapper">
            <FoodInputForm />
            <FoodListings setSelectedFood={setSelectedFood} />
            {/* outputs (chart with totals off to side) */}
        </div>
    );
};

export default FoodCalcPage;
