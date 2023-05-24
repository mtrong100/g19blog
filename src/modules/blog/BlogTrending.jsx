import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";
import { v4 } from "uuid";
import BlogItemTrending from "./BlogItemTrending";

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
      <div className="grid gap-8 mt-10 md:grid-cols-2">
        {bestPosts.length > 0 &&
          bestPosts.map((item) => {
            return <BlogItemTrending key={v4()} data={item}></BlogItemTrending>;
          })}
      </div>
    </div>
  );
};

export default BlogTrending;
