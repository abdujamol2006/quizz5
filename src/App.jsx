//rrd
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
//antd
import { DatePicker } from "antd";
//layout
import MainLayout from "./layout/MainLayout";
//pages
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

import ErrorPage from "./pages/ErrorPage";

import About from "./pages/About";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        {
          path: "/quiz/:title",
          element: <Quiz />,
        },
      ],
    },
    { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
    { path: "/register", element: user ? <Navigate to="/" /> : <Register /> },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
