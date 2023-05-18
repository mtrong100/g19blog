import React from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import HomePage from "../../pages/HomePage";

const DashboardLayout = () => {
  const { userInfo } = useAuth();
  if (!userInfo) return <HomePage></HomePage>;

  return (
    <>
      <DashboardHeader />
      <div className="dashboard-layout py-[50px] px-10">
        <Sidebar />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
