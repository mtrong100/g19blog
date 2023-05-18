import React from "react";
import { useDropdown } from "./dropdown-context";
import PropTypes from "prop-types";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute max-h-[300px] left-0 w-full overflow-y-auto shadow-sm category-list rounded-bl-md rounded-br-md bg-slate-600 top-full">
          {children}
        </div>
      )}
    </>
  );
};

List.propTypes = {
  children: PropTypes.node,
};

export default List;
