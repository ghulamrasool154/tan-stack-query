import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { Home } from "./components/home";
import { Service } from "./components/service";
import { Users } from "./components/users";
import Layout from "./layout";
import Login from "./components/login";
import Shop from "./components/shop";
import SingleUser from "./components/single-user";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <SingleUser />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
