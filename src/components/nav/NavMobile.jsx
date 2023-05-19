import React, { useState } from "react";
import { nav } from "../../data/data";
import { v4 } from "uuid";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import { CgClose } from "react-icons/cg";

const NavMobile = ({ open, setOpen }) => {
  return (
    <ul
      className={`${
        open ? "translate-x-0" : "-translate-x-full"
      }  fixed bg-colorDime shadow-xl transition-all duration-300 top-0 left-0 h-full w-[250px] flex flex-col items-stretch`}
    >
      <div className="flex items-center justify-between px-5 pt-10 pb-6 border-b-2 border-solid border-b-colorPurple">
        <Logo />
        <span
          onClick={() => setOpen(false)}
          className="text-2xl w-[40px] h-[40px] rounded-full bg-colorPurple flex items-center justify-center text-white"
        >
          <CgClose />
        </span>
      </div>

      <div className="mt-10">
        {nav.map((item) => (
          <li className="px-8 py-5" key={v4()}>
            <NavLink
              className="text-2xl font-semibold uppercase md:text-3xl"
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default NavMobile;
