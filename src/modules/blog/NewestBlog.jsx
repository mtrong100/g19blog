import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import BlogNewestLarge from "./BlogNewestLarge";
import BlogNewestItem from "./BlogNewestItem";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";
import { v4 } from "uuid";

const NewestBlog = () => {
  const [hotPosts, setHotPosts] = useState([]);
  // HANDLE GET HOT POST DATA
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", "approved"),
      where("promote", "==", "hot"),
      limit(4)
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
        setHotPosts(results);
      });
    });
  }, []);

  if (hotPosts.length <= 0) return null;
  const [first, ...other] = hotPosts;
  return (
    <section className="mb-20">
      <div className="page-container">
        <Heading>Newest blogs</Heading>
        <div className="grid grid-cols-2 gap-10 mt-16 ">
          <BlogNewestLarge data={first}></BlogNewestLarge>
          <div className="p-5 border border-r-[8px] shadow-xl  border-colorPurple bg-colorDime rounded-xl">
            {other.length > 0 &&
              other.map((item) => (
                <BlogNewestItem key={v4()} data={item}></BlogNewestItem>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestBlog;
