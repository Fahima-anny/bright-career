import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import HomeItems from "./Components/HomeItems";
import ErrorPage from "./Components/ErrorPage";
import ServiceDetails from "./Components/ServiceDetails";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage> ,
      children: [
        {
            path: "/",
            element: <HomeItems></HomeItems>,
            loader: () => fetch('/services.json')
          },
          {
            path: "/contact",
            element: <Contact></Contact>
          },
          {
            path: "/serviceDetails/:id",
            element: <ServiceDetails></ServiceDetails>,
            loader: () => fetch('/services.json')
          },
      ]
    },

  ]);

export default Routes;