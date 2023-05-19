import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Heading from "../components/heading/Heading";
import BlogItem from "../modules/blog/BlogItem";
import { v4 } from "uuid";
import { db } from "../firebase-app/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  // GET ALL POSTS DATA IN FIRESTORE DATABASE
  useEffect(() => {
    async function getPostData() {
      const colRef = collection(db, "posts");
      onSnapshot(colRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(results);
      });
    }
    getPostData();
  }, []);

  // FIX SCROLL BUG
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Layout>
      <div className="page-container py-[150px]">
        <Heading>All posts collection</Heading>
        <div className="grid gap-5 mt-10 md:grid-cols-3">
          {posts.length > 0 &&
            posts.map((item) => {
              return <BlogItem key={v4()} data={item}></BlogItem>;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
