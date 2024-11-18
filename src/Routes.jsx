import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import HomeItems from "./Components/HomeItems";
import ErrorPage from "./Components/ErrorPage";
import ServiceDetails from "./Components/ServiceDetails";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgetPass from "./Components/ForgetPass";
import PrivateRoutes from "./Providers/PrivateRoutes";
import MyProfile from "./Components/MyProfile";


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
            element: <PrivateRoutes><Contact></Contact></PrivateRoutes>
          },
          {
            path: "/profile",
            element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
          },
          {
            path: "/serviceDetails/:id",
            element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes> ,
            loader: () => fetch('/services.json')
          },
          {
            path: "/login",
            element: <Login></Login>
          },
          {
            path: "/register",
            element: <Register></Register>
          },
          {
            path: "/forgetPassword",
            element: <ForgetPass></ForgetPass>
          },
      ]
    },

  ]);

export default Routes;