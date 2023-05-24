import React from "react";
import NotFoundPage from "../../pages/NotFoundPage";
import BlogImage from "../blog/BlogImage";
import BlogMeta from "../blog/BlogMeta";

const UserItem = ({ data }) => {
  if (!data.id) return <NotFoundPage />;

  // FORMAT DATE
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-3 p-5 mx-auto user-card md:gap-8 glass rounded-xl bg-colorDarkRedux">
      <span className="absolute px-5 py-2 text-xs font-medium capitalize rounded md:text-base top-5 right-5 bg-colorSecondary">
        {data?.role}
      </span>
      <BlogImage
        size="circle"
        className="mt-12 mb-2 border-4 rounded-full md:mt-16 border-colorPrimary"
        url={data?.avatar}
        alt="blog-img"
      />
      <div className="flex flex-col items-center justify-center gap-3">
        <BlogMeta
          className="flex-col text-xs md:text-base"
          path={data?.slug}
          date={formatDate}
          author={data?.username}
        />
      </div>
    </div>
  );
};

export default UserItem;
