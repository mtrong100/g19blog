import React, { useEffect, useState } from "react";
import NotFoundPage from "./NotFoundPage";
import Layout from "../components/layout/Layout";
import Heading from "../components/heading/Heading";
import BlogItem from "../modules/blog/BlogItem";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { db } from "../firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const UserProfilePage = () => {
  const { userInfo } = useAuth();
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  // FETCH POST DATA WITH SLUG
  useEffect(() => {
    async function fetchPostData() {
      const colRef = collection(db, "posts");
      const slugRef = query(colRef, where("user.slug", "==", slug));
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

  // FETCH USER DATA
  useEffect(() => {
    async function fetchUserData() {
      const colRef = collection(db, "users");
      const q = query(colRef, where("slug", "==", slug));
      onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
          doc.data() && setUser(doc.data());
        });
      });
    }
    fetchUserData();
  }, [slug]);

  // FIX SCROLL BUG
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // FORMAT DATE
  const date = user?.createdAt?.seconds
    ? new Date(user?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  if (!slug) return <NotFoundPage />;
  if (!userInfo) return <NotFoundPage />;
  return (
    <Layout>
      <div className="page-container py-[150px]">
        <div className="flex items-center gap-5">
          <img
            className="w-[130px] h-[130px] md:w-[250px] object-cover md:h-[250px] rounded border-2 border-gradient"
            src={user?.avatar}
            alt="user-avatar"
          />
          <div className="flex flex-col gap-4">
            <Heading>{`${slug}`}</Heading>
            <span className="italic font-semibold hover:opacity-90 text-colorPrimary">
              {user?.email}
            </span>
            <div className="flex items-center gap-5">
              <span className="inline-block px-6 py-2 text-sm font-semibold text-center text-white capitalize rounded-lg select-none bg-colorSecondary md:text-base">
                {user?.role}
              </span>
              <span className="text-sm font-semibold text-white select-none md:text-lg hover:opacity-90">
                {`Date: ${formatDate}`}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Heading>blogs post</Heading>
          <div className="grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 &&
              posts.map((item) => {
                return <BlogItem key={v4()} data={item}></BlogItem>;
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfilePage;
