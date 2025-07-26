import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home /> },
    //   { path: "/explore-gardeners", element: <ExploreGardeners /> },
    //   { path: "/browse-tips", element: <BrowseTips /> },
    //   { path: "/tips/:id", element: <TipDetails /> },
    //   { path: "/share-tip", element: <ShareTip /> }, // Private Route হবে
    //   { path: "/my-tips", element: <MyTips /> },     // Private Route হবে
    //   { path: "/login", element: <Login /> },
    //   { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;