import React from "react";
import BlogImage from "./BlogImage";
import BlogCategory from "./BlogCategory";
import BlogMeta from "./BlogMeta";
import BlogTitle from "./BlogTitle";
import slugify from "slugify";

const BlogNewestLarge = ({ data }) => {
  if (!data.id) return null;
  // FORMAT DATE TO DISPLAY
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  return (
    <div className="bg-colorDime border border-r-[8px] rounded border-colorPink">
      <BlogImage
        className="h-[250px] md:h-[430px] group rounded"
        url={data?.image}
        alt="blog-img"
      />
      <div className="px-5 py-8 rounded-br-xl rounded-bl-xl">
        <div className="flex items-center justify-between mb-6">
          <BlogCategory path={slugify(data?.category.slug)}>
            {data?.category?.title}
          </BlogCategory>
          <BlogMeta
            path={data?.user?.slug}
            date={formatDate}
            author={data?.user?.username}
          />
        </div>
        <BlogTitle path={slugify(data?.slug)} className="text-xl md:text-3xl">
          {data?.title}
        </BlogTitle>
      </div>
    </div>
  );
};

export default BlogNewestLarge;
