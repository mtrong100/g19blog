import React from "react";
import { Link } from "react-router-dom";

const BlogCategory = ({ path = "", children, className = "" }) => {
  return (
    <span
      className={`${className} inline-block capitalize w-fit rounded-lg py-2 px-5 text-sm bg-colorGradient font-semibold overflow-hidden `}
    >
      <Link className="block hover:underline" to={`/category/${path}`}>
        {children}
      </Link>
    </span>
  );
};

export default BlogCategory;
