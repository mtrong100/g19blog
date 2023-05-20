import React from "react";
import BlogImage from "./BlogImage";
import BlogCategory from "./BlogCategory";
import BlogMeta from "./BlogMeta";
import BlogTitle from "./BlogTitle";
import slugify from "slugify";
import NotFoundPage from "../../pages/NotFoundPage";
import PropTypes from "prop-types";

const BlogItem = ({ data, blockHeight = false }) => {
  if (!data.id) return <NotFoundPage />;

  // FORMAT DATE
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  return (
    <div className="flex flex-col h-full border shadow-lg border-gradient bg-colorDime">
      <BlogImage
        className={`${
          blockHeight ? "h-[250px] lg:h-[350px]" : "h-[200px] lg:h-[250px]"
        }  mb-2 group`}
        url={data?.image}
        alt="blog-img"
      />
      <div className="flex flex-col flex-1 h-full gap-4 p-3">
        <BlogCategory path={slugify(data?.category?.slug)} className="text-xs">
          {data?.category?.title}
        </BlogCategory>
        <BlogTitle
          path={slugify(data?.slug)}
          className="flex-1 md:text-sm lg:text-xl"
        >
          {data?.title}
        </BlogTitle>
        <BlogMeta
          className="text-sm lg:text-base"
          path={data?.user?.slug}
          date={formatDate}
          author={data?.user?.username}
        />
      </div>
    </div>
  );
};

// ADDING PropTypes
BlogItem.propTypes = {
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

export default BlogItem;
