import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { db } from "../../firebase-app/firebase-config";
import BlogNewestItem from "./BlogNewestItem";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const BlogSidebar = () => {
  const [posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(true);

  // GET ALL POSTS DATA IN FIRESTORE DATABASE
  useEffect(() => {
    async function getPostData() {
      const colRef = collection(db, "posts");
      const queries = query(
        colRef,
        where("status", "==", "approved"),
        where("promote", "in", ["best", "none"]),
        limit(10)
      );
      onSnapshot(queries, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(results);
        // setLoading(false);
      });
    }
    getPostData();
  }, []);

  return (
    <section className="sticky top-[110px] border border-colorPrimary rounded-md flex-col hidden gap-5 p-5 lg:flex bg-colorDarkRedux">
      {posts.length > 0 &&
        posts.map((item) => (
          <BlogNewestItem key={v4()} data={item}></BlogNewestItem>
        ))}
    </section>
  );
};

export default BlogSidebar;
