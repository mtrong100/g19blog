import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import BlogCategory from "./BlogCategory";
import BlogMeta from "./BlogMeta";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";
import BlogTitle from "./BlogTitle";
import slugify from "slugify";
import BlogImage from "./BlogImage";

const BlogTrending = () => {
  const [bestPosts, setBestPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", "approved"),
      where("promote", "==", "best"),
      limit(4)
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
        setBestPosts(results);
      });
    });
  }, []);

  return (
    <div className="mb-20 page-container">
      <Heading>Trending blogs</Heading>
      <div className="grid grid-cols-2 gap-8 mt-10">
        {bestPosts.length > 0 &&
          bestPosts.map((data) => {
            const date = data?.createdAt?.seconds
              ? new Date(data?.createdAt?.seconds * 1000)
              : new Date();
            const formatDate = new Date(date).toLocaleDateString("vi-VI");
            return (
              <div
                key={data.id}
                className="rounded shadow-lg border border-r-[8px]  border-colorPink bg-colorDime"
              >
                <BlogImage
                  className="rounded h-[400px] group "
                  url={data?.image}
                  alt="blog-img"
                />
                <div className="p-5 mt-5">
                  <BlogTitle path={slugify(data?.slug)} className="text-2xl">
                    {data?.title}
                  </BlogTitle>
                  <div className="flex items-center justify-between mt-5">
                    <BlogCategory
                      path={slugify(data?.category.slug)}
                      className="w-fit"
                    >
                      {data?.category?.title}
                    </BlogCategory>
                    <BlogMeta
                      path={data?.user?.slug}
                      date={formatDate}
                      author={data?.user?.username}
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BlogTrending;
