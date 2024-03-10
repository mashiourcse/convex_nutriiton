import React, { useState } from 'react';

const SliderInput = ({ label, id, value, onChange }) => {
  return (
    <div className="form-group row">
      <div className="col-sm-5 col-form-label">
        <label htmlFor={id}>{label}</label>
      </div>
      
      <div className="col-sm-7 row">
        <input type="range" className="col-sm-8 form-control" id={id} value={value} onChange={onChange} min="0" max="100" />
        <span className="col-sm-3 col-form-label">{value}</span>
      </div>
    </div>
  );
};

const NutritionForm = () => {
  const [formData, setFormData] = useState({
    proteins: '',
    carbs: '',
    fats: '',
    vitamins: '',
    minerals: '',
    water: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, such as sending the form data to an API
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='NutritionInput'>
      <h2>Nutrition</h2>
      <SliderInput label="Proteins(%)" id="proteins" value={formData.proteins} onChange={handleInputChange} />
      <SliderInput label="Carbs(%)" id="carbs" value={formData.carbs} onChange={handleInputChange} />
      <SliderInput label="Fats(%)" id="fats" value={formData.fats} onChange={handleInputChange} />
      <SliderInput label="Vitamins(%)" id="vitamins" value={formData.vitamins} onChange={handleInputChange} />
      <SliderInput label="Minerals(%)" id="minerals" value={formData.minerals} onChange={handleInputChange} />
      <SliderInput label="Water(%)" id="water" value={formData.water} onChange={handleInputChange} />
      
      <button type="submit" className='btn btn-success' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NutritionForm;
