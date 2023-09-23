import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../components/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

    ],
  },
  {
    path: "*",
    element: <Main></Main>,
    children: [
      {
        path: "*",
      },
    ],
  },
]);

export default router;