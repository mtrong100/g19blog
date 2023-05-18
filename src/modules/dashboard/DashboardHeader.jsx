import React from "react";
import Button from "../../components/button/Button";
import { useAuth } from "../../context/auth-context";

const DashboardHeader = () => {
  const { userInfo } = useAuth();
  console.log(userInfo);

  return (
    <header className="w-full py-5 bg-black shadow-md">
      <div className="flex items-center justify-between page-container">
        <Button type="button" kind="secondary" path="/">
          return home
        </Button>
        <div className="flex items-center gap-5">
          <span className="text-lg font-semibold capitalize">
            {userInfo?.username}
          </span>
          <div className="w-[50px] h-[50px] rounded-full">
            <img
              className="rounded-full imgCover"
              src={userInfo?.avatar}
              alt="user-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
