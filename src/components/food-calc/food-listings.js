import React from "react";
import sortArray from "sort-array";

const FoodListings = (props) => {
    const foods = require("../../foods.json");
    const renderFood = () => {
        const foodArray = [];
        for (const [key, value] of Object.entries(foods)) {
            foodArray.push({ [key]: value });
        }

        sortArray(foodArray, {
            by: ["quality", "kcalDiff"],
            order: ["desc", "desc"],
            computed: {
                quality: (food) => Object.values(food)[0].quality,
                kcalDiff: (food) => {
                    const foodValues = Object.values(food)[0];
                    // food.kcal - getIngredientsKcal(foods[food])
                    let ingredientsSum = 0;
                    if (foodValues.ingredients) {
                        for (const ingredient of foodValues.ingredients) {
                            if (foods[ingredient]) {
                                ingredientsSum += foods[ingredient].kcal;
                            }
                        }
                    }
                    return foodValues.kcal - ingredientsSum;
                },
            },
        });
        // console.log(foodArray);

        return foodArray.map((food) => {
            for (const value of Object.values(food)) {
                return (
                    <div
                        key={value.label}
                        className="food-img"
                        onClick={() => props.setSelectedFood(value)}
                    >
                        <img src={value.url} alt={value.label} />
                    </div>
                );
            }
        });
    };

    return <div className="food-wrapper">{renderFood()}</div>;
};

export default FoodListings;
