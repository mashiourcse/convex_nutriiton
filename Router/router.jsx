import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import RecommendationSystem from "../src/pages/RecommendationSystem";
import About from "../src/pages/About";

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/recommendation-system",
            element: <RecommendationSystem/>,
        },
        {
            path: "/about",
            element: <About/>,
        },

    ]
)