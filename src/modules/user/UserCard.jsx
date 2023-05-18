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
    <div className="relative flex flex-col items-center justify-center w-full gap-8 p-5 mx-auto user-card rounded-xl bg-colorDime">
      <span className="absolute px-4 py-2 font-semibold capitalize rounded top-5 right-5 bg-colorGradient">
        {data?.role}
      </span>
      <BlogImage
        className="h-[150px] w-[150px] mt-12 rounded-full mb-2 group border-4 border-colorPink"
        url={data?.avatar}
        alt="blog-img"
      />
      <div className="flex flex-col items-center justify-center gap-3">
        <BlogMeta
          className="flex-col text-base"
          path={data?.slug}
          date={formatDate}
          author={data?.username}
        />
      </div>
    </div>
  );
};

export default UserItem;
