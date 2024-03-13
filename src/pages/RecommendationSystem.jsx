import { useState } from "react";
import NutritionForm from "../components/NutritionForm";

import { SingleFood } from "../components/SingleFood";
import { Card } from "../components/Card";

const App = () => {
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
  return (
    <main className="Recommendation_System">
    <div class="row ">
        <div class="col-3" id="sticky-sidebar">
            <div class="nutrition-form sticky-top">
                
      <NutritionForm/>
            </div>
        </div>
        <div class="col" id="main">
        <div className="food-container">
          <h2 className="text-center">Recommended Food</h2>
       
        
          <div className="recommend-food">
            {FoodData.map((singlefoodData, index) => {
              return (
                <div className="single-item">
                  <Card
                    SingleFoodData={singlefoodData}
                    index={index}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        
      </div>
        </div>
    </div>
    </main>
  );
};

export default App;