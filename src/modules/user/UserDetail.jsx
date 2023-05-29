import React from "react";
import PropTypes from "prop-types";
import Heading from "../../components/heading/Heading";

const UserDetail = ({ data, slug, formatDate }) => {
  return (
    <div className="flex items-center gap-5">
      <img
        className="w-[130px] h-[130px] md:w-[250px] object-cover md:h-[250px] rounded border-2 border-gradient"
        src={data?.avatar}
        alt="data-avatar"
      />
      <div className="flex flex-col gap-4">
        <Heading>{`${slug}`}</Heading>
        <span className="italic font-semibold hover:opacity-90 text-colorPrimary">
          {data?.email}
        </span>
        <div className="flex items-center gap-5">
          <span className="inline-block px-6 py-2 text-sm font-semibold text-center text-white capitalize rounded-lg select-none bg-colorSecondary md:text-base">
            {data?.role}
          </span>
          <span className="text-sm font-semibold text-white select-none md:text-lg hover:opacity-90">
            {`Date: ${formatDate}`}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ADDING PropsTypes */
UserDetail.propTypes = {
  data: PropTypes.string,
  slug: PropTypes.string,
  formatDate: PropTypes.string,
};

export default UserDetail;
