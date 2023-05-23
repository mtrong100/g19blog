import React from "react";
import { Link } from "react-router-dom";

const BlogCategory = ({ path = "", children, className = "" }) => {
  return (
    <span
      className={`${className} text-white inline-block capitalize w-fit rounded-md py-2 px-4 text-sm bg-colorSecondary font-semibold overflow-hidden `}
    >
      <Link className="block hover:underline" to={`/category/${path}`}>
        {children}
      </Link>
    </span>
  );
};

export default BlogCategory;
