import React from "react";
import { userSidebarLinks } from "../../data/data";
import Logo from "../logo/Logo";
import { v4 } from "uuid";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-app/firebase-config";
import Swal from "sweetalert2";

const SidebarUser = () => {
  const handleSignOut = () => {
    Swal.fire({
      title: "Log out of your account?",
      text: "You'll need to log in again to access it later",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        signOut(auth);
        Swal.fire("Log out successfully !");
      }
    });
  };

  return (
    <section className="w-[300px] h-fit bg-colorDime shadow-lg rounded-xl p-5 border-l-4 border-colorPink">
      <Logo className="flex items-center justify-center pb-5" />
      <ul className="flex flex-col gap-2 pt-8 border-t border-colorPink">
        {userSidebarLinks.map((item) => {
          if (item.onClick) {
            return (
              <li
                className="flex items-center gap-3 px-5 py-4 text-lg font-semibold uppercase cursor-pointer select-none sidebar-item"
                onClick={handleSignOut}
                key={v4()}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            );
          }

          return (
            <NavLink
              key={v4()}
              className={({ isActive }) =>
                `${
                  isActive ? "text-colorPink font-semibold" : ""
                } flex items-center gap-3 cursor-pointer sidebar-item text-lg font-semibold uppercase select-none px-5 py-4`
              }
              to={item.url}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
};

export default SidebarUser;
