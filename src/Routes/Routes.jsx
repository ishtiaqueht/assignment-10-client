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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/explore-gardeners", element:<ExploreGardeners></ExploreGardeners> },
      { path: "/browse-tips", element: <BrowseTips></BrowseTips> },
    //   { path: "/tips/:id", element: <TipDetails /> },
      { path: "/share-tip", element: <ShareTip /> }, // Private Route হবে
      { path: "/my-tips", element: <MyTips /> },     // Private Route হবে
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;