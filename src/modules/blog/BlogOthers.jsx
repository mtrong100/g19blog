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
import BlogNewestItem from "./BlogNewestItem";

const BlogOthers = () => {
  const [posts, setPosts] = useState([]);

  // HANDLE GET HOT POST DATA
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", "approved"),
      where("promote", "==", "none"),
      limit(8)
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
        setPosts(results);
      });
    });
  }, []);

  const firstHalf = posts.slice(0, 4);
  const secondHalf = posts.slice(4);

  return (
    <section className="mb-20">
      <div className="page-container">
        <Heading>More blogs</Heading>
        <div className="grid gap-10 mt-16 lg:grid-cols-2">
          <div className="p-5 rounded-lg shadow-xl bg-colorDarkRedux">
            {firstHalf.length > 0 &&
              firstHalf.map((item) => {
                return <BlogNewestItem key={v4()} data={item}></BlogNewestItem>;
              })}
          </div>
          <div className="p-5 rounded-lg shadow-xl bg-colorDarkRedux">
            {secondHalf.length > 0 &&
              secondHalf.map((item) => {
                return <BlogNewestItem key={v4()} data={item}></BlogNewestItem>;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOthers;
