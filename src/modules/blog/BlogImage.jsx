import React from "react";
import { Link } from "react-router-dom";

const BlogImage = ({
  className = "rounded-md",
  alt = "blog-img",
  path = "",
  url = "",
}) => {
  if (path) {
    return (
      <Link to={`/${path}`}>
        <div className={`${className} overflow-hidden`}>
          <img
            className="transition-all duration-500 select-none imgCover group-hover:scale-105"
            src={url}
            alt={alt}
            loading="lazy"
          />
        </div>
      </Link>
    );
  }

  return (
    <div className={`${className} overflow-hidden`}>
      <img
        className="transition-all duration-500 select-none imgCover group-hover:scale-105"
        src={url}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

export default BlogImage;
