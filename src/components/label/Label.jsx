import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, htmlFor = "", ...props }) => {
  return (
    <label
      className="font-bold uppercase cursor-pointer select-none md:text-xl text-colorPurple"
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

export default Label;
