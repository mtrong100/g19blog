import React, { useEffect, useState } from "react";
import Heading from "../components/heading/Heading";
import { useAuth } from "../context/auth-context";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase-app/firebase-config";
import { v4 } from "uuid";
import BlogItem from "../modules/blog/BlogItem";

const DashboardPage = () => {
  const { userInfo } = useAuth();
  const [posts, setPosts] = useState([]);

  // FETCH POST DATA
  useEffect(() => {
    async function fetchPostData() {
      if (!userInfo.uid) return;
      const colRef = collection(db, "posts");
      const q = query(colRef, where("user.id", "==", userInfo.uid));
      onSnapshot(q, (snapshot) => {
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
  }, [userInfo.uid]);

  const date = userInfo?.createdAt?.seconds
    ? new Date(userInfo?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  return (
    <>
      <Heading>personal dashboard</Heading>
      {/* USER-INFO */}
      <div className="mt-10">
        <div className="flex flex-col items-center gap-5 px-8 py-5 rounded-md md:flex-row bg-colorDime">
          <img
            className="w-[250px] object-cover h-[250px] rounded-full border-2 border-colorPink"
            src={userInfo?.avatar}
            alt="userInfo-avatar"
          />
          <div className="flex flex-col gap-4">
            <Heading>{userInfo.username}</Heading>
            <div className="flex items-center gap-2">
              <span>Email:</span>
              <span className="font-semibold hover:opacity-90 text-colorPink">
                {userInfo?.email}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>Pasword:</span>
              <span className="font-semibold hover:opacity-90 text-colorGreen">
                {userInfo?.password}
              </span>
            </div>
            <div className="flex items-center gap-5 mt-2">
              <span className="hover:opacity-90 capitalize w-fit select-none inline-block px-[15px] text-center rounded-lg font-semibold bg-colorGradient text-white py-[10px]">
                {userInfo?.role}
              </span>
              <span className="text-lg font-semibold text-white select-none hover:opacity-90">
                {`Date: ${formatDate}`}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* USER-BLOGS */}
      <div className="mt-16">
        <Heading>your blogs</Heading>
        <div className="grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 &&
            posts.map((item) => {
              return <BlogItem key={v4()} data={item}></BlogItem>;
            })}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
