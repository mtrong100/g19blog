import React from "react";
import PropTypes from "prop-types";

const BlogImage = ({
  size = "medium",
  className = "rounded-lg",
  alt = "blog-img",
  url = "",
}) => {
  switch (size) {
    case "small":
      size = "w-full h-[250px] md:h-[200px] lg:h-[170px]";
      break;
    case "medium":
      size = "h-[250px] md:h-[150px] lg:h-[250px]";
      break;
    case "big":
      size = "h-[250px] lg:h-[350px]";
      break;
    case "large":
      size = "h-[250px] md:h-[430px]";
      break;
    case "circle":
      size = "w-[100px] h-[100px] md:h-[150px] md:w-[150px]";
      break;

    default:
      break;
  }

  return (
    <div className={`${className} ${size} overflow-hidden group `}>
      <img
        className="transition-all duration-500 select-none imgCover group-hover:scale-105"
        src={url}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

/* ADDING PropsTypes */
BlogImage.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
};

export default BlogImage;
