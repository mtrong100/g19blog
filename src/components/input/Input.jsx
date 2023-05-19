import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative w-full">
      <input
        className="w-full p-5 md:text-base text-sm font-medium transition-all border-2 border-slate-600 border-solid rounded-lg input focus:bg-[#282A3A] focus:border-colorPurple"
        type={type}
        id={name}
        {...field}
        {...props}
      />
      {children ? (
        <div className="absolute right-[20px] top-2/4 cursor-pointer -translate-y-2/4">
          {children}
        </div>
      ) : null}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.node,
  control: PropTypes.any.isRequired,
};

export default Input;
