import "./App.css";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Notfound from "./pages/Notfound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
