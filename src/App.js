import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/PublicRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navbar>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
      </Routes>
    </Navbar>
  );
}

export default App;
