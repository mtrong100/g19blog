import React from "react";
import PropTypes from "prop-types";

const LabelRole = ({ children, type = "" }) => {
  let typeStyles = "";
  switch (type) {
    case "admin":
      typeStyles = "bg-colorGradient";
      break;
    case "mod":
      typeStyles = "bg-colorGradient2";
      break;
    case "user":
      typeStyles = "bg-colorDarkSaga";
      break;

    default:
      break;
  }
  return (
    <span
      className={`${typeStyles} hover:opacity-90 select-none inline-block px-[15px] w-[100px] text-center rounded-lg font-semibold text-sm py-[10px]`}
    >
      {children}
    </span>
  );
};

LabelRole.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  typeStyles: PropTypes.string,
};

export default LabelRole;
