import React, { useState } from "react";
import { useNutritionContext } from "../../Context/NutritionContext";

const Input = ({ label, id, value, onChange }) => {
  return (
    <div className="form-group row">
      <div className="col-sm-5 col-form-label">
        <label htmlFor={id}>{label}</label>
      </div>

      <div className="col-sm-7 row">
        <input
          type="number"
          className="col-sm-8 form-control"
          id={id}
          value={value}
          onChange={onChange}
          min="0"
          max="100"
        />
        {/* <span className="col-sm-3 col-form-label">{value}</span> */}
      </div>
    </div>
  );
};

const NutritionForm = () => {
  const { inputData, setinputData } = useNutritionContext();

  // console.log(inputData);

  const [formData, setFormData] = useState({
    calories: "",
    protein: "",
    carbohydrates: "",
    cholesterol: "",
    fat: "",
    fiber: "",
    iron: "",
    calcium: "",
    sodium: "",
    sugars: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setinputData(formData);
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Nutrition</h2>
      </div>
      <div className="card-body">
        <form>
          <Input
            label="Calories"
            id="calories"
            value={formData.calories}
            onChange={handleInputChange}
          />
          <Input
            label="protein(g)"
            id="protein"
            value={formData.protein}
            onChange={handleInputChange}
          />
          <Input
            label="carbohydrates(g)"
            id="carbohydrates"
            value={formData.carbohydrates}
            onChange={handleInputChange}
          />
          <Input
            label="cholesterol(g)"
            id="cholesterol"
            value={formData.cholesterol}
            onChange={handleInputChange}
          />
          <Input
            label="fat(g)"
            id="fat"
            value={formData.fat}
            onChange={handleInputChange}
          />
          <Input
            label="fiber(g)"
            id="fiber"
            value={formData.fiber}
            onChange={handleInputChange}
          />
          <Input
            label="iron(g)"
            id="iron"
            value={formData.iron}
            onChange={handleInputChange}
          />

          <Input
            label="calcium(g)"
            id="calcium"
            value={formData.calcium}
            onChange={handleInputChange}
          />
          <Input
            label="sodium(g)"
            id="sodium"
            value={formData.sodium}
            onChange={handleInputChange}
          />
          <Input
            label="sugars(g)"
            id="sugars"
            value={formData.sugars}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NutritionForm;
