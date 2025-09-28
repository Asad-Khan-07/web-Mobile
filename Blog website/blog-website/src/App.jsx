import { lazy, Suspense } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useActionData,
  useLoaderData,
} from "react-router";
import Home from "./home";
import Blog from "./blog";
import About from "./about";
import Post from "./post";
import Errorpage from "./error";
import axios from "axios";
import Data from "./data";
// import { useLoaderData } from "react-router-dom";

function App() {
  const blogLoader = async () => {
    const res = await axios.get(
      "https://openlibrary.org/search.json?q=harry+potter"
    );
    return res.data.docs;
  };

  const Blog = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import("./blog")), 3000);
    });
  });
  const Post = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import("./post")), 3000);
    });
  });
  const About = lazy(() => import("./about"));
  // const Post = lazy(() => );

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Errorpage />,
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={"loading..."}>
          <About />
        </Suspense>
      ),
    },
    {
      path: "/blog",
      element: (
        <Suspense fallback={<h1 style={{ margin: "20%" }}>Loading.....</h1>}>
          <Blog />
        </Suspense>
      ),
      children: [
        {
          // index:false,
          path: "post",
          element: (
            <Suspense
              fallback={<h1 style={{ margin: "10%" }}>Loading.....</h1>}
            >
              <Post />
            </Suspense>
          ),
          loader: blogLoader,
          children: [
            {
              index: false,
              path: "data",
              element: <Data />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
