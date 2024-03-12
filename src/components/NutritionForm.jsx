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
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='card'>
      <div className='card-header'>
        <h2>Nutrition</h2>
      </div>
      <div className='card-body'>
        <form>
          <SliderInput label="Calories" id="calories" value={formData.calories} onChange={handleInputChange} />
          <SliderInput label="Proteins(g)" id="proteins" value={formData.proteins} onChange={handleInputChange} />
          <SliderInput label="Carbs(g)" id="carbs" value={formData.carbs} onChange={handleInputChange} />
          <SliderInput label="Fats(g)" id="fats" value={formData.fats} onChange={handleInputChange} />
          <SliderInput label="Vitamins(g)" id="vitamins" value={formData.vitamins} onChange={handleInputChange} />
          <SliderInput label="Minerals(g)" id="minerals" value={formData.minerals} onChange={handleInputChange} />
          <SliderInput label="Water(g)" id="water" value={formData.water} onChange={handleInputChange} />
          
          <button type="submit" className='btn btn-success' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NutritionForm;
