import React, { createContext, useContext, useState } from "react";

const NutritionContext = createContext();

export const NutritionProvider = ({ children }) => {
  const [inputData, setinputData] = useState({
    proteins: "",
    carbs: "",
    fats: "",
    vitamins: "",
    minerals: "",
    water: "",
  });

  return (
    <NutritionContext.Provider value={{ inputData, setinputData }}>
      {children}
    </NutritionContext.Provider>
  );
};

export const useNutritionContext = () => useContext(NutritionContext);
