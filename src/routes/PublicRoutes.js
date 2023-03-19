import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";

export const publicRoutes = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
  {
    path: "/about",
    name: "About",
    Component: About,
  },
  {
    path: "/services",
    name: "Services",
    Component: Services,
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
