import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Radio = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <label>
      <input
        checked={checked}
        type="radio"
        className="hidden-input"
        {...field}
        {...rest}
      />
      <div className="flex items-center font-medium cursor-pointer gap-x-3">
        <div
          className={`w-7 h-7 rounded-full border-2 border-colorPurple flex items-center justify-center p-1  ${
            checked
              ? "bg-colorPurple text-white"
              : "border-colorPurple text-transparent"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className="font-medium uppercase select-none">{children}</span>
      </div>
    </label>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  control: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
};

export default Radio;
