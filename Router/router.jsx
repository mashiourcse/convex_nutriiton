import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import RecommendationSystem from "../src/pages/RecommendationSystem";
import About from "../src/pages/About";
import Layouts from "../src/components/layouts/Layouts";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recommendation-system",
        element: <RecommendationSystem />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  // {
  //     path: "/",
  //     element: <Home/>,
  // },
  // {
  //     path: "/recommendation-system",
  //     element: <RecommendationSystem/>,
  // },
  // {
  //     path: "/about",
  //     element: <About/>,
  // },
]);