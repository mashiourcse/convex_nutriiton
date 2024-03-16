import { useState } from "react";
import NutritionForm from "../components/NutritionForm";

import { SingleFood } from "../components/SingleFood";
import { Card } from "../components/Card";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useNutritionContext } from "../../Context/NutritionContext";

const App = () => {
  const { inputData } = useNutritionContext();
  console.log("inputData: ", inputData);

  let FoodData = useQuery(api.brandedFoods.get, { inputData: inputData });
  // console.log("FoodData: ", FoodData);
  // console.log("length of FoodData: ", Object.keys(FoodData).length);

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
              // console.log("here!!!");
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
