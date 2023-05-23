import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/banner/Banner";
import FeatureBlogs from "../modules/home/FeatureBlogs";
import NewestBlog from "../modules/blog/NewestBlog";
import BlogTrending from "../modules/blog/BlogTrending";
import BlogOthers from "../modules/blog/BlogOthers";

const HomePage = () => {
  // FIX SCROLL BUG
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <Layout>
        <Banner />
        <FeatureBlogs />
        <NewestBlog />
        <BlogTrending />
        <BlogOthers />
      </Layout>
    </>
  );
};

export default HomePage;
