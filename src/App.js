import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PrivateRoute from "./Authentication/PrivateRoute";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import AdminRoute from "./Authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navbar>
      <Routes>
        {PublicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
        <Route element={<PrivateRoute></PrivateRoute>}>
          {PrivateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Route>
        <Route element={<AdminRoute></AdminRoute>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route
              path="add-service"
              element={<AddService></AddService>}
            ></Route>
            <Route path="add-admin" element={<AddAdmin></AddAdmin>}></Route>
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
