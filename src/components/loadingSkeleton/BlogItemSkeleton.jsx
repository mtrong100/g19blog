import Skeleton from "react-loading-skeleton";
import React from "react";
import { v4 } from "uuid";

const BlogItemSkeleton = ({ blogs, Imageheight }) => {
  return Array(blogs)
    .fill(0)
    .map((item) => (
      <div
        key={v4()}
        className="flex flex-col h-full p-3 rounded-lg bg-colorDarkRedux"
      >
        <Skeleton height={Imageheight} />
        <div className="flex flex-col flex-1 h-full gap-4 p-3">
          <Skeleton width={80} height={32} />
          <Skeleton count={4} />
          <Skeleton width={170} height={30} />
        </div>
      </div>
    ));
};

export default BlogItemSkeleton;
