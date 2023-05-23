import React from "react";
import { sidebarLinks } from "../../data/data";
import Logo from "../logo/Logo";
import { v4 } from "uuid";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-app/firebase-config";
import Swal from "sweetalert2";
import { useAuth } from "../../context/auth-context";
import { CgClose } from "react-icons/cg";

const Sidebar = () => {
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
    <section
      className={`hidden lg:block w-[300px] h-fit bg-colorDarkRedux shadow-lg rounded-lg p-5 border-l-2 border-colorPrimary`}
    >
      <Logo className="flex items-center justify-center pb-5" />
      <ul className="flex flex-col gap-2 pt-8 border-t border-colorPrimary">
        {sidebarLinks.map((item) => {
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
                  isActive ? "text-colorPrimary font-semibold" : ""
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

export default Sidebar;

export const SidebarMobile = () => {
  const { open, setOpen } = useAuth();
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
    <section
      className={`${
        open ? "translate-x-0" : "-translate-x-full"
      }  w-[300px] fixed shadow-xl z-[99] transition-all duration-300 top-0 h-full left-0 bg-colorDarkRedux pt-10
       p-5 border-l-2 border-colorPrimary`}
    >
      <div className="flex items-center justify-between pb-5">
        <Logo className="flex items-center justify-center" />
        <span
          onClick={() => setOpen(false)}
          className="text-xl w-[40px] h-[40px] rounded-full bg-colorPrimary flex items-center justify-center text-white"
        >
          <CgClose />
        </span>
      </div>
      <ul className="flex flex-col gap-2 pt-8 border-t border-colorPrimary">
        {sidebarLinks.map((item) => {
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
              onClick={() => setOpen(false)}
              key={v4()}
              className={({ isActive }) =>
                `${
                  isActive ? "text-colorPrimary font-semibold" : ""
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
