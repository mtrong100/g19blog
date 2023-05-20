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
      className={`${className} font-bold capitalize cursor-pointer font-primary ${
        hoverStyle ? "hover:underline" : "blog-title"
      }`}
    >
      <Link className="block" to={`/${path}`}>
        {children}
      </Link>
    </h1>
  );
};

export default BlogTitle;