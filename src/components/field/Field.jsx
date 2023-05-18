import React from "react";
import PropTypes from "prop-types";

const Field = ({ children }) => {
  return (
    <div className="flex flex-col items-start gap-5 mb-10 capitalize last:mb-0">
      {children}
    </div>
  );
};

Field.propTypes = {
  children: PropTypes.node,
};

export default Field;
