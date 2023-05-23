import React from "react";
import { useDropdown } from "./dropdown-context";
import PropTypes from "prop-types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Select = ({ placeholder = "" }) => {
  const { toggle, show } = useDropdown();
  return (
    <div
      className="flex items-center justify-between p-5 font-medium capitalize cursor-pointer rounded-tl-md rounded-tr-md bg-colorSecondary "
      onClick={toggle}
    >
      <span>{placeholder}</span>
      <span>
        {show ? (
          <span className="text-xl">
            <IoIosArrowUp />
          </span>
        ) : (
          <span className="text-xl">
            <IoIosArrowDown />
          </span>
        )}
      </span>
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Select;
