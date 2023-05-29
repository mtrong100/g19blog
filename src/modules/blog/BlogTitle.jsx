import React from "react";
import { Link } from "react-router-dom";

const BlogTitle = ({
  path = "",
  className = "text-xl",
  hoverStyle = false,
  children,
}) => {
  return (
    <h1
      className={`${className} font-bold leading-snug capitalize cursor-pointer font-primary ${
        hoverStyle ? "hover:underline" : "hover:text-colorPrimary"
      }`}
    >
      <Link className="block" to={`/${path}`}>
        {children}
      </Link>
    </h1>
  );
};

export default BlogTitle;
