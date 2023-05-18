import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/banner/Banner";
import FeatureBlogs from "../modules/home/FeatureBlogs";
import NewestBlog from "../modules/blog/NewestBlog";
import BlogTrending from "../modules/blog/BlogTrending";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Banner />
        <FeatureBlogs />
        <NewestBlog />
        <BlogTrending />
      </Layout>
    </>
  );
};

export default HomePage;
