import Home from "../pages/Home/Home";

import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";

export const PublicRoutes = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },

  {
    path: "/contact",
    name: "Contact",
    Component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    Component: Login,
  },
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
];
