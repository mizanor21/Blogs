import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home";
import BlogList from "../components/Blogs/BlogList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <BlogList></BlogList>,
        loader: () =>
          fetch(`https://blog-server-ifut9xkib-mizanor21.vercel.app/blogs`),
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
