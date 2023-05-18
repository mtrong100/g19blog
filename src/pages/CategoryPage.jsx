import React, { useEffect, useState } from "react";
import NotFoundPage from "./NotFoundPage";
import Layout from "../components/layout/Layout";
import Heading from "../components/heading/Heading";
import BlogItem from "../modules/blog/BlogItem";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { db } from "../firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const CategoryPage = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  // GET ALL POSTS DATA IN FIRESTORE DATABASE
  useEffect(() => {
    async function fetchPostData() {
      const colRef = collection(db, "posts");
      const slugRef = query(colRef, where("category.slug", "==", slug));
      onSnapshot(slugRef, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
          setPosts(results);
        });
      });
    }
    fetchPostData();
  }, [slug]);

  if (!slug) return <NotFoundPage />;
  return (
    <Layout>
      <div className="page-container py-[150px]">
        <Heading>{`Category:  #${slug}`}</Heading>
        <div className="grid grid-cols-3 gap-5 mt-10">
          {posts.length > 0 &&
            posts.map((item) => {
              return <BlogItem key={v4()} data={item}></BlogItem>;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
