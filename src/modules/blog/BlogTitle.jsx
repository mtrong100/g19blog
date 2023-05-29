import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogTitle = ({
  path = "",
  className = "text-xl",
  hoverStyle = false,
  children,
}) => {
  return (
    <h1
      className={`${className} font-bold leading-snug capitalize  cursor-pointer font-primary ${
        hoverStyle ? "hover:underline" : "hover:text-colorPrimary"
      }`}
    >
      <Link className="block" to={`/${path}`}>
        {children}
      </Link>
    </h1>
  );
};

/* ADDING PropsTypes */
BlogTitle.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
  className: PropTypes.string,
  hoverStyle: PropTypes.bool,
};

export default BlogTitle;
