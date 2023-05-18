import slugify from "slugify";
import React from "react";
import PropTypes from "prop-types";
import NotFoundPage from "../../pages/NotFoundPage";
import BlogTitle from "./BlogTitle";
import BlogMeta from "./BlogMeta";
import BlogImage from "./BlogImage";
import BlogCategory from "./BlogCategory";

const BlogFeatureItem = ({ data }) => {
  if (!data.id) return <NotFoundPage />;

  // FORMAT DATE
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  const { category, user } = data;

  return (
    <div className="relative border-r-[8px] border mt-10  border-colorPurple rounded-xl">
      <BlogImage
        className="h-[250px] rounded-xl"
        url={data.image}
        alt="blog-img"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-60 mix-blend-multiply rounded-xl"></div>
      <div className="absolute inset-0 z-10 p-5 ">
        <div className="flex items-center justify-between mb-3">
          <BlogCategory path={slugify(category.slug)}>
            {category.title}
          </BlogCategory>
          <BlogMeta path={user.slug} date={formatDate} author={user.username} />
        </div>
        <BlogTitle
          className="text-2xl"
          path={slugify(data.slug)}
          hoverStyle="true"
        >
          {data.title}
        </BlogTitle>
      </div>
    </div>
  );
};

// ADDING PropTypes
BlogFeatureItem.propTypes = {
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

export default BlogFeatureItem;
