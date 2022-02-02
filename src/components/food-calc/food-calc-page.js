import React, { useState } from "react";

import FoodListings from "./food-listings";
import FoodInputForm from "./food-input-form";
import FoodOutput from "./food-output";

const FoodCalcPage = (props) => {
    const foods = require("../../foods.json");
    const [selectedFood, setSelectedFood] = useState(foods.barbeque);

    return (
        <div className="calc-wrapper">
            <FoodInputForm />
            <FoodListings setSelectedFood={setSelectedFood} />
            <FoodOutput selectedFood={selectedFood} />
        </div>
    );
};

export default FoodCalcPage;
