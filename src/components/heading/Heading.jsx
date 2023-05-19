import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children }) => {
  return (
    <h1 className="text-2xl font-semibold uppercase border-b-2 md:text-4xl text-linear w-fit border-colorPurple">
      {children}
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
};

export default Heading;
