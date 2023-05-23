import React from "react";
import PropTypes from "prop-types";
import { useDropdown } from "./dropdown-context";

const Option = ({ children, onClick }) => {
  const { setShow } = useDropdown();

  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };

  return (
    <div
      className="flex items-center justify-between px-5 py-6 font-medium capitalize cursor-pointer select-none glass hover:text-colorPrimary"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

Option.propTypes = {
  children: PropTypes.node,
};

export default Option;
