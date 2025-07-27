import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ExploreGardeners from "../Pages/ExploreGardeners";
import BrowseTips from "../Pages/BrowseTips";
import ShareTip from "../Pages/ShareTip";
import MyTips from "../Pages/MyTips";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import TipDetails from "../Pages/TipDetails";
import PrivateRoute from "../layouts/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/explore-gardeners",
        loader: () => fetch("http://localhost:3000/gardeners"),
        element: <ExploreGardeners></ExploreGardeners>,
      },
      {
        path: "/browse-tips",
        loader: () => fetch("http://localhost:3000/tips/"),
        element: <BrowseTips></BrowseTips>,
      },
      {
        path: "/tips/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tips/${params.id}`),
        element: (
          <PrivateRoute>
            <TipDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/share-tip",
        element: (
          <PrivateRoute>
            <ShareTip />
          </PrivateRoute>
        ),
      }, // Private Route হবে
      {
        path: "/my-tips",
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        ),
      }, // Private Route হবে
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
