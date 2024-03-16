import { useState } from "react";
import NutritionForm from "../components/NutritionForm";

import { SingleFood } from "../components/SingleFood";
import { Card } from "../components/Card";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useNutritionContext } from "../../Context/NutritionContext";

const App = () => {
  /*
  let FoodData = [
    {
      header: "Nutrient2",
      description: "Fruit Bubble gum",
      calories: "3432",
      brandOwner: "America's original",
      brandedFoodCategory: "Chewing Gum & Mints",
      servingSize: 8,
      servingSizeUnit: "g",
      labels: ["Proteins", "Carbs", "Fats", "Vitamins", "Minerals", "Water"],
      data: [30, 40, 20, 5, 3, 2],
    },
    {
      header: "Nutrient3",
      description: "Choco Delight gum",
      calories: "2500",
      brandOwner: "Taste Treats Inc.",
      brandedFoodCategory: "Chewing Gum & Mints",
      servingSize: 8,
      servingSizeUnit: "g",
      labels: ["Proteins", "Carbs", "Fats", "Vitamins", "Minerals", "Water"],
      data: [25, 35, 15, 4, 2, 1],
    },
    {
      header: "Nutrient4",
      description: "Minty Fresh gum",
      calories: "1800",
      brandOwner: "Fresh & Cool Corp.",
      brandedFoodCategory: "Chewing Gum & Mints",
      servingSize: 8,
      servingSizeUnit: "g",
      labels: ["Proteins", "Carbs", "Fats", "Vitamins", "Minerals", "Water"],
      data: [20, 30, 10, 3, 1, 0],
    },
  ];
  */
  const { inputData } = useNutritionContext();
  console.log(inputData);

  let FoodData = useQuery(api.brandedFoods.get);

  return (
    <div className="row Recommendation_System">
      <div className="col-12 col-xl-3 col-lg-3 col-md-12" id="sticky-sidebar">
        <div className="nutrition-form sticky-top">
          <NutritionForm />
        </div>
      </div>
      <div className="col-12 col-xl-9 col-lg-9 col-md-12" id="main">
        <div className="card food-container">
          <h2 className="text-center">Recommended Food</h2>

          <div className="recommend-food">
            {FoodData?.map((singlefoodData, index) => {
              console.log("singlefoodData:", singlefoodData);
              return (
                <div className="single-item" key={index}>
                  <Card SingleFoodData={singlefoodData} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
