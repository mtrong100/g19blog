import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  className = "",
  padding = "px-5 py-4",
  kind = "primary",
  ...props
}) => {
  const { path } = props;
  let backgroundBtn = "bg-colorPrimary";
  if (kind === "secondary") {
    backgroundBtn = "bg-colorSecondary";
  }

  if (path !== "" && typeof path === "string") {
    return (
      <Link to={path}>
        <button
          type={type}
          onClick={onClick}
          {...props}
          className={`flex ${className} btn-shinny-1 ${padding} text-sm md:text-base  capitalize items-center justify-center  rounded-md font-medium cursor-pointer ${backgroundBtn}`}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={`flex ${className} btn-shinny-1 text-sm md:text-base capitalize items-center justify-center px-5 py-4 rounded-md font-medium cursor-pointer ${backgroundBtn}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  kind: PropTypes.string,
  padding: PropTypes.string,
  path: PropTypes.string,
};

export default Button;
