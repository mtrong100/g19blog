import React from "react";
import PropTypes from "prop-types";

const Table = ({ children }) => {
  return (
    <div className="table-layout bg-colorDarkRedux hidden-scrollbar">
      <table>{children}</table>
    </div>
  );
};

Table.propTypes = {
  children: PropTypes.node,
};

export default Table;
