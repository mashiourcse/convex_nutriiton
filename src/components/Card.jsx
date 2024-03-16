import React, { useEffect, useState } from "react";
import { ChartComponent } from "./ChartComponent";

export const Card = ({ SingleFoodData, index }) => {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [chartRender, setChartRender] = useState(false);
  const accordionId = `accordion-${index}`;
  const [arrow, setArrow] = useState(true);
  let arrelement = arrow ? (
    <i className="fa fa-arrow-down" aria-hidden="true"></i>
  ) : (
    <i className="fa fa-arrow-up" aria-hidden="true"></i>
  );
  let changeArrow = () => {
    setArrow(!arrow);
  };

  function filterNutritionValue(obj) {
    const skippedProperties = ['_creationTime', '_id', 'brandOwner', 'calories', 'brandedFoodCategory', 'description', 'name', 'servingSize', 'servingSizeUnit'];  
    let labels = [];
    let data = [];
  
    for (const [key, value] of Object.entries(obj)) {
      if (!skippedProperties.includes(key)) {
       // console.log(`${key}: ${value}`);
        labels.push(key);
        data.push(value);
      }
    }
   setLabels(labels);
   setData(data);
  }

  useEffect(()=>{
    filterNutritionValue(SingleFoodData);
    setChartRender(true);
  },[])
  console.log(SingleFoodData);
  return (
    <div id={accordionId} className="accordion">
      <div className="card">
        <div
          className="card-header d-flex justify-content-between"
          id={`heading${index}`}
        >
          <h2>{SingleFoodData?.description}</h2>
          <h2 className="mb-0 ">
            <button
              onClick={changeArrow}
              className="btn btn-link"
              data-toggle="collapse"
              data-target={`#collapse${index}`}
              aria-expanded="true"
              aria-controls={`collapse${index}`}
            >
              {arrelement}
            </button>
          </h2>
        </div>

        <div
          id={`collapse${index}`}
          className="collapse"
          aria-labelledby={`heading${index}`}
          data-parent={`#${accordionId}`}
        >
          <div className="card-body">
            <div className="nutrition-data">
              <p className="card-text">
                {/* Here are the nutrition facts for 1 medium-sized banana (about
                118 grams): */}
                {SingleFoodData?.brandOwner} {" "} {SingleFoodData?.brandedFoodCategory}
              </p>
              <div className="row">
                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-">
                  <ul className="list-group">
                    <li className="list-group-item font-weight-bold">
                      {"CALORIES: "} {SingleFoodData.calories} {"kcal"}
                    </li>
                    {
                      labels.map( (name, index)=>{
                        return <li className="list-group-item">{name}: {data[index]}</li>
                      })
                    }
                    
                    {/* <li className="list-group-item">Saturated Fat: 0.1g</li>
                   <li className="list-group-item">Total Fat: 0.4g</li>
                   <li className="list-group-item">Cholesterol: 0mg</li>
                    <li className="list-group-item">Sodium: 1mg</li>
                    <li className="list-group-item">Total Carbohydrate: 27g</li>
                    <li className="list-group-item">Dietary Fiber: 3.1g</li>
                    <li className="list-group-item">Sugars: 14.8g</li>
                    <li className="list-group-item">Protein: 1.3g</li>
                    <li className="list-group-item">
                      Vitamin C: 14.6mg (16% DV)
                    </li>
                    <li className="list-group-item">
                      Potassium: 422mg (9% DV)
                    </li> */}
                  </ul>
                </div>
                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                {
                  chartRender && <ChartComponent
                  labels={labels}
                  data={data}
                  
                />
                }  
                </div>
                {/* <div className="col-sm-4"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
