import React from "react";
import { Link, NavLink } from "react-router-dom";

const DashboardSidebar = ({ children }) => {
  return (
    <div className="drawer drawer-mobile mt-16 bg-accent">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <NavLink to="/dashboard/add-service">Add Service</NavLink>
          </li>
          <li>
            <NavLink className="my-3" to="/dashboard/add-admin">
              Add Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
