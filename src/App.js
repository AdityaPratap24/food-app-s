import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./Style.css";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import myStore from "./utils/myStore";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";

// lazy loading or onDemand loading
const Instamart = lazy(() => import("./components/Instamart"));

const App = () => {
  const [user, setUser] = useState({
    name: "Aditya Pratap",
    email: "pratap@gmail.com",
  });
  return (
    <Provider store={myStore}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        {/* children will go inside outlet */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          // fallback is for till the page loads show something if want
          // Suspense is for to wait sometime till the page loads and then start rendering
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path : '/cart',
        element: <Cart />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
