import React from 'react'

import { ChartComponent } from './ChartComponent'
import { Card } from './Card'


let SingleFoodData = {
    header: "Nutrient",
    labels: ["Proteins", "Carbs", "Fats", "Vitamins", "Minerals", "Water"],
    data: [30, 40, 20, 5, 3, 2],
}
export const SingleFood = ({SingleFoodData}) => {
  return (
    <>
  

    <div className='d-flex'>
    <Card SingleFoodData={SingleFoodData} className=''/>
              <ChartComponent 
                className=''
                labels={SingleFoodData.labels}
                data={SingleFoodData.data}
                header={SingleFoodData.header}
              />
           </div>
              </>
  )
}
