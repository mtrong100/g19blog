import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import BlogItemSkeleton from "../../components/loadingSkeleton/BlogItemSkeleton";
import BlogItem from "../blog/BlogItem";
import { db } from "../../firebase-app/firebase-config";
import {
  where,
  query,
  collection,
  onSnapshot,
  limit,
} from "firebase/firestore";

const FeatureBlogs = () => {
  const [featurePosts, setFeaturePost] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts data from firebase
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
      setLoading(false);
    });
  }, []);

  return (
    <section className="pt-20 pb-[100px] md:pb-[120px]">
      <div className="page-container">
        <Heading>Feature blogs</Heading>
        <div className="grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {loading && <BlogItemSkeleton Imageheight={250} blogs={6} />}
          {featurePosts.length > 0 &&
            featurePosts.map((post) => <BlogItem key={post.id} data={post} />)}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlogs;
