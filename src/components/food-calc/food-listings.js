import React from "react";
import sortArray from "sort-array";

import foods from "../../foods";

const FoodListings = (props) => {
    const getIngredientsKcal = (food) => {
        let ingredientsSum = 0;
        for (const ingredient of food.ingredients) {
            foods.forEach((x) => {
                if (x.value === ingredient) {
                    ingredientsSum += x.kcal;
                }
            });
        }
        // console.log(`Sum of ingredients for ${food.label}`, ingredientsSum);
        return food.kcal - ingredientsSum;
    };

    const renderFood = () => {
        sortArray(foods, {
            by: ["quality", "kcalDiff"],
            order: ["desc", "desc"],
            computed: {
                kcalDiff: (food) => getIngredientsKcal(food),
            },
        });

        return foods.map((food) => {
            return (
                <div key={food.value} className="food-img">
                    <img src={food.url} alt={food.label} />
                </div>
            );
        });
    };

    return <div className="food-wrapper">{renderFood()}</div>;
};

export default FoodListings;
