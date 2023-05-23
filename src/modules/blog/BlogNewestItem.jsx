import React from "react";
import BlogImage from "./BlogImage";
import demoImg from "../../assets/images/demo.png";
import BlogCategory from "./BlogCategory";
import BlogMeta from "./BlogMeta";
import BlogTitle from "./BlogTitle";
import slugify from "slugify";

const BlogNewestItem = ({ data }) => {
  if (!data.id) return null;
  // FORMAT DATE TO DISPLAY
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  const { category, user } = data;

  return (
    <div
      className={`flex flex-col md:flex-row gap-5 mb-7 pb-7 border-b border-b-colorPurple last:border-b-0 last:pb-0 last:mb-0`}
    >
      <BlogImage
        className="flex-1 w-full h-[170px] rounded-xl group"
        url={data?.image}
        alt="blog-img"
      />
      <div className="flex flex-col flex-1 gap-3">
        <BlogCategory className="text-xs" path={slugify(data?.category.slug)}>
          {category?.title}
        </BlogCategory>
        <BlogTitle path={slugify(data?.slug)} className="text-lg">
          {data?.title}
        </BlogTitle>
        <BlogMeta
          className="text-xs"
          path={user?.slug}
          date={formatDate}
          author={user?.username}
        />
      </div>
    </div>
  );
};

export default BlogNewestItem;
