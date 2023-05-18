import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  className = "",
  kind = "primary",
  ...props
}) => {
  const { path } = props;
  let backgroundBtn = "bg-colorPurple";
  if (kind === "secondary") {
    backgroundBtn = "bg-colorGradient";
  }

  if (path !== "" && typeof path === "string") {
    return (
      <Link to={path}>
        <button
          type={type}
          onClick={onClick}
          {...props}
          className={`flex ${className} btn-shinny-1 text-lg capitalize items-center justify-center px-5 rounded-md h-[50px] font-medium cursor-pointer ${backgroundBtn}`}
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
      className={`flex ${className} btn-shinny-1 text-lg capitalize items-center justify-center px-5 rounded-md h-[50px] font-medium cursor-pointer ${backgroundBtn}`}
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
  path: PropTypes.string,
};

export default Button;
