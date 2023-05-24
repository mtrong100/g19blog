import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Heading from "../components/heading/Heading";
import BlogItem from "../modules/blog/BlogItem";
import { v4 } from "uuid";
import { db } from "../firebase-app/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { AiOutlineSearch } from "react-icons/ai";
import BlogItemSkeleton from "../components/loadingSkeleton/BlogItemSkeleton";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      });
    }
    getPostData();
  }, []);

  // SEARCH POSTS
  const searchPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // FIX SCROLL BUG
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Layout>
      <div className="page-container py-[150px]">
        <Heading>All posts collection</Heading>
        {/* SEARCH */}
        <div className="flex w-full gap-3 px-5 py-4 mt-10 border-2 border-solid rounded-full border-colorPrimary">
          <span className="text-2xl">
            <AiOutlineSearch />
          </span>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className="w-full"
            placeholder="Search post..."
          />
        </div>
        <div className="grid gap-5 mt-10 md:grid-cols-3">
          {loading && <BlogItemSkeleton blogs={9} />}
          {searchPosts.length > 0 &&
            searchPosts.map((item) => {
              return <BlogItem key={v4()} data={item}></BlogItem>;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
