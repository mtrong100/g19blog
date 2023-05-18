import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import BlogFeatureItem from "../blog/BlogFeatureItem";
import { db } from "../../firebase-app/firebase-config";
import {
  where,
  query,
  collection,
  onSnapshot,
  limit,
} from "firebase/firestore";
import BlogItem from "../blog/BlogItem";

const FeatureBlogs = () => {
  const [featurePosts, setFeaturePost] = useState([]);

  // HANDLE GET POST DATA
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", "approved"),
      where("promote", "==", "feature"),
      limit(3)
    );
    onSnapshot(queries, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setFeaturePost(results);
    });
  }, []);

  return (
    <section className="pt-20 pb-[120px]">
      <div className="page-container">
        <Heading>Feature blogs</Heading>
        <div className="grid grid-cols-3 gap-5 mt-10">
          {featurePosts.length > 0 &&
            featurePosts.map((post) => <BlogItem key={post.id} data={post} />)}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlogs;
