import React from "react";
import PropTypes from "prop-types";

const LabelStatus = ({ children, type = "" }) => {
  let typeStyles = "";
  switch (type) {
    case "success":
      typeStyles = "bg-green-600";
      break;
    case "warning":
      typeStyles = "bg-yellow-600";
      break;
    case "danger":
      typeStyles = "bg-red-600";
      break;

    default:
      break;
  }
  return (
    <span
      className={`${typeStyles} hover:opacity-90 select-none inline-block w-[110px] text-center rounded-lg font-semibold text-sm py-[10px]`}
    >
      {children}
    </span>
  );
};

LabelStatus.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  typeStyles: PropTypes.string,
};

export default LabelStatus;
