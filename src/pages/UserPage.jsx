import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Heading from "../components/heading/Heading";
import BlogItem from "../modules/blog/BlogItem";
import { v4 } from "uuid";
import { db } from "../firebase-app/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import UserCard from "../modules/user/UserCard";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  // GET ALL POSTS DATA IN FIRESTORE DATABASE
  useEffect(() => {
    async function getUserData() {
      const colRef = collection(db, "users");
      onSnapshot(colRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUsers(results);
      });
    }
    getUserData();
  }, []);

  // FIX SCROLL BUG
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Layout>
      <div className="page-container py-[150px]">
        <Heading>All users</Heading>
        <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-3 lg:grid-cols-4">
          {users.length > 0 &&
            users.map((item) => <UserCard key={v4()} data={item}></UserCard>)}
        </div>
      </div>
    </Layout>
  );
};

export default UserPage;
