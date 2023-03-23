import About from "../pages/About/About";
import Services from "../pages/Services/Services";

export const PrivateRoutes = [
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
];
