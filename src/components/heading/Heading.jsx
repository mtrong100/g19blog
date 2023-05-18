import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children }) => {
  return (
    <h1 className="text-4xl font-semibold uppercase border-b-2 text-linear w-fit border-colorPurple">
      {children}
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
};

export default Heading;
