import React from "react";
import Heading from "../../components/heading/Heading";
import PropTypes from "prop-types";

const UserInfo = ({ userInfo, formatDate }) => {
  return (
    <div className="flex flex-col items-center gap-5 px-8 py-5 mt-10 rounded-md md:flex-row bg-colorDarkRedux">
      <img
        className="w-[250px] object-cover h-[250px] rounded-full border-2 border-colorPrimary"
        src={userInfo?.avatar}
        alt="userInfo-avatar"
      />
      <div className="flex flex-col gap-4">
        <Heading>{userInfo.username}</Heading>
        <div className="flex items-center gap-2">
          <span>Email:</span>
          <span className="font-semibold hover:opacity-90 text-colorPrimary">
            {userInfo?.email}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>Pasword:</span>
          <span className="font-semibold hover:opacity-90 text-colorGreen">
            {userInfo?.password}
          </span>
        </div>
        <div className="flex items-center gap-5 mt-2">
          <span className="hover:opacity-90 capitalize w-fit select-none inline-block px-[15px] text-center rounded-lg font-semibold bg-colorGradient text-white py-[10px]">
            {userInfo?.role}
          </span>
          <span className="text-lg font-semibold text-white select-none hover:opacity-90">
            {`Date: ${formatDate}`}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ADDING PropsTypes */
UserInfo.propTypes = {
  userInfo: PropTypes.any,
  formatDate: PropTypes.any,
};
export default UserInfo;
