import React, { useEffect } from "react";
import NewestBlog from "../modules/blog/NewestBlog";
import Layout from "../components/layout/Layout";
import FeatureBlogs from "../modules/home/FeatureBlogs";
import BlogTrending from "../modules/blog/BlogTrending";
import BlogOthers from "../modules/blog/BlogOthers";
import Banner from "../components/banner/Banner";

const HomePage = () => {
  // Fix scroll bug
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
