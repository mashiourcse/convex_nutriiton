import React from 'react'
export const Card = ({SingleFoodData}) => {
  return (
    <div className="card">
    <div className="card-header">
      <h2>{SingleFoodData?.description}</h2>
    </div>
    <div className="card-body">
      {/* <h5 className="card-title">Banana</h5> */}
      <div className='nutrition-data'>
      <p className="card-text">Here are the nutrition facts for 1 medium-sized banana (about 118 grams):</p>
      <div className="row">
      <div className="col-sm-4">
    <ul className="list-group">
      <li className="list-group-item font-weight-bold">CALORIES: 1345 kcal</li>
      
    </ul>
  </div>
  <div className="col-sm-4">
    <ul className="list-group">
      <li className="list-group-item">Calories: 105</li>
      <li className="list-group-item">Total Fat: 0.4g</li>
      <li className="list-group-item">Saturated Fat: 0.1g</li>
      <li className="list-group-item">Cholesterol: 0mg</li>
      <li className="list-group-item">Sodium: 1mg</li>
      <li className="list-group-item">Total Carbohydrate: 27g</li>
    </ul>
  </div>
  <div className="col-sm-4">
    <ul className="list-group">
      <li className="list-group-item">Dietary Fiber: 3.1g</li>
      <li className="list-group-item">Sugars: 14.8g</li>
      <li className="list-group-item">Protein: 1.3g</li>
      <li className="list-group-item">Vitamin C: 14.6mg (16% DV)</li>
      <li className="list-group-item">Potassium: 422mg (9% DV)</li>
    </ul>
  </div>
</div>
</div>
    </div>
  </div>


  )
}
