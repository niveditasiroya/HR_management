import React from "react";
import Data from "../components/dashboard/Data";
import Employee from "../components/dashboard/Employee";
import EmployeeData from "../components/dashboard/EmployeeData";
import { ThemeContext } from "../contexts/ThemeContext";

const Dashboard = () => {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div>
      <section>
        <div className=" flex flex-col justify-center items-center py-5">
          <h1 className={`font-bold text-2xl ${toggle ? "text-white" : ""}`}>DASHBOARD</h1>
          <p className=" font-semibold text-yellow-500">
            Welcome to your Dashboard
          </p>
        </div>
      </section>

      {/* <section className="grid grid-cols-3 gap-3 px-8 mb-3">
        <div className="grid col-span-3 lg:col-span-2">
          <Data />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Employee />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-3 px-8">
        <EmployeeData />
      </section> */}

      <section className="px-3 py-5">
        <section className="p-3">
          <div>
            <Data />
          </div>
        </section>
        <section className="grid grid-cols-2 gap-5 p-3">
          <div className=" lg:col-span-1 col-span-2">
            <Employee />
          </div>
          <div className=" lg:col-span-1 col-span-2">
            <EmployeeData />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
