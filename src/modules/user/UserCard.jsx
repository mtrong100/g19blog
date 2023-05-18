import React from "react";
import slugify from "slugify";
import PropTypes from "prop-types";
import NotFoundPage from "../../pages/NotFoundPage";
import BlogImage from "../blog/BlogImage";
import BlogTitle from "../blog/BlogTitle";
import BlogMeta from "../blog/BlogMeta";

const UserItem = ({ data }) => {
  console.log(data);
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
        className="h-[250px] w-[250px] mt-12 rounded-full mb-2 group border-4 border-colorPink"
        url={data?.avatar}
        alt="blog-img"
      />
      <div className="flex flex-col items-center justify-center gap-3">
        <BlogMeta
          className="text-xl"
          path={data?.slug}
          date={formatDate}
          author={data?.username}
        />
      </div>
    </div>
  );
};

// ADDING PropTypes
UserItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.shape({
      seconds: PropTypes.number,
    }),
    image: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
    user: PropTypes.shape({
      slug: PropTypes.string,
      username: PropTypes.string,
    }),
  }).isRequired,
};

export default UserItem;
