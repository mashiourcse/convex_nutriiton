# README.md 

<a name="introduction"/> 

## Introduction 

This project was part of a submission to the [Convex 2024 Hackathon](https://convexhackathon.devpost.com/). As food enthusiasts, our goal was to create a search tool for foods based on nutrition parameters. The [website](https://convex-nutriiton.vercel.app/) features a small summary of nutrition benefits (Left Image) as well as the search tool itself (Right Image) with search parameters on the left (for nutrients such as calories, carbs, protein, fiber, etc...) and paginated search results on the right that expand to display a donut chart of the included nutrients for that food. 

<p> 
  <img src="https://github.com/mashiourcse/convex_nutriiton/blob/master/convex_repo_image_1_resized.png" width=45% height=50% /> 
  <img src="https://github.com/mashiourcse/convex_nutriiton/blob/master/convex_repo_image_2_resized.png" width=45% height=50% /> 
</p>

<a name="table-of-contents"/> 

## Table of Contents 
[Introduction](#introduction) <br>
[Table of Contents](#table-of-contents) <br>
[Project Description](#project-description) <br>
[Usage](#usage) <br>
[Known Issues](#known-issues) <br>
[Credits](#credits) <br>
[Other](#other) <br>

<a name="project-description"/> 

## Project Description 

Aside from our shared enthusiasm for for food, we also care about being healthy, which is why we wanted to create a tool that would help in the process of selecting foods that met our nutritonal needs. Whether it's to optimize a personal diet for weight loss or muscle growth, or if it's just to avoid unhealthy food, we believe tools built on large food and nutrition datasets would benefit many people. 

The [web app](https://convex-nutriiton.vercel.app/) starts with a list of nutrition facts relating to Protein, Carbohydrates, Fats, Fiber, Vitamins, Minerals, and Water. From the Navbar, the [search tool](https://convex-nutriiton.vercel.app/recommendation-system) can be accessed, revealing an interface where the user may input numerical nutrition parameters. Upon submitting the input, the right side of the screen will populate with paginated results from the Convex databse. If the user clicks one of the search results, an extended display will appear, showing tabulated nutrition data for the selected food alongside a donut chart of the nutrients for easy proportional view. 

This is a Full Stack Web Application using React, TypeScript, Bootstrap, and Chart.js for the Front End and Convex for the Backend. Python was used to process the [USDA FDC Data](https://fdc.nal.usda.gov/), and the scripts we used can be found on the [GitHub repo](https://github.com/JosephArmstrong314/usda-fdc-etl/tree/main) for the ETL (Extract, Transfer, Load) process. For deployment, we used Vercel. 

<a name="usage"/> 

## Usage 

To use our tool, simply visit the [website](https://convex-nutriiton.vercel.app/recommendation-system) or go to this URL: "https://convex-nutriiton.vercel.app/recommendation-system". Then, click the words "Recommendation System" at the top of the screen, which will bring you to an interface like in the Right Image above. Next, type in numeric values for some or all of the available search parameters (calories, proteins, carbs, etc...). Then, click the green "Submit" button. Afterwards, click on any of the downward arrows next to the food names to see a tabulated view of the food's nutritional data alongside a donut chart of the same information. You can also display more of the search results by specifying a lower and upper bound of the search results in the two blue input fields above the search results.

<a name="known-issues"/> 

## Known Issues 

- Input fields don't always fully display the user's input values on small screen displays 

<a name="credits"/> 

## Credits 

| Contributors | GitHub Profile | LinkedIn | DevPost Profile | 
|---|:---:|:---:|:---:|
| Joseph Armstrong | [GitHub](https://github.com/JosephArmstrong314) | [LinkedIn](https://www.linkedin.com/in/joseph-armstrong-31415926535897932384626/) | [DevPost](https://devpost.com/joeagorn) | 
| Mashiour Rahman | [GitHub](https://github.com/mashiourcse) | [LinkedIn](https://www.linkedin.com/in/mashiour-rahman-557b6a16b/) | [DevPost](https://devpost.com/mashiourcse) | 
| Bijon Talukder | [GitHub](https://github.com/BijonTalukder) | [LinkedIn](https://www.linkedin.com/in/bijon-talukder-934879210/) | [DevPost](https://devpost.com/BijonTalukder) | 
| Sarah Armstrong | [GitHub](https://github.com/saraharmstrong314) | [LinkedIn](https://www.linkedin.com/in/saraharmstrong314/) | [DevPost](https://devpost.com/saraharmstrong314) | 

<a name="other"/> 

## Other

| Important Links | 
|---|
| [Front End GitHub Repo](https://github.com/mashiourcse/convex_nutriiton) | 
| [ETL GitHub Repo](https://github.com/JosephArmstrong314/usda-fdc-etl) | 
| [DevPost Submission](https://devpost.com/software/nutrition-tool-using-usda-dataset) | 
| [USDA FDC Data](https://fdc.nal.usda.gov/) | 
| [Convex Website](https://www.convex.dev/) | 
| [Convex 2024 Hackathon](https://convexhackathon.devpost.com/) | 
