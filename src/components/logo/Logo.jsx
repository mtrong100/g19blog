import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Logo = ({ className = "" }) => {
  return (
    <Link className={`text-2xl md:text-3xl font-semibold ${className}`} to="/">
      <span className="font-bold text-linear">G19</span>BLOG
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};
export default Logo;
