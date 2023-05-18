import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Heading from "../../components/heading/Heading";
import BlogItem from "./BlogItem";
import { db } from "../../firebase-app/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const BlogRelated = ({ categoryID }) => {
  const [postRelated, setPostRelated] = useState([]);

  // GET POSTS DATA WITH HAS THE SIMILAR CATEGORY
  useEffect(() => {
    async function fetData() {
      if (!categoryID) return;
      const docRef = query(
        collection(db, "posts"),
        where("category.id", "==", categoryID),
        limit(3)
      );
      onSnapshot(docRef, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPostRelated(results);
      });
    }
    fetData();
  }, [categoryID]);

  if (!categoryID) return null;
  return (
    <div className="pb-20">
      <Heading>similar blogs</Heading>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {postRelated.length > 0 &&
          postRelated.map((item) => (
            <BlogItem key={item.id} data={item}></BlogItem>
          ))}
      </div>
    </div>
  );
};

/* ADDING PropsTypes */
BlogRelated.propTypes = {
  categoryID: PropTypes.string,
};

export default BlogRelated;
