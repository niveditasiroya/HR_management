import React from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import EmpData from "./components/employees/EmpData";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div className={toggle ? "bg-[#122647]" : "bg-blue-100"}>
      <AppRoutes />
      {/* <EmpData /> */}
    </div>
  );
}

export default App;
