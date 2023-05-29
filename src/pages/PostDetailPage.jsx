import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import BlogImage from "../modules/blog/BlogImage";
import BlogCategory from "../modules/blog/BlogCategory";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase-app/firebase-config";
import BlogTitle from "../modules/blog/BlogTitle";
import parse from "html-react-parser";
import BlogRelated from "../modules/blog/BlogRelated";
import NotFoundPage from "./NotFoundPage";
import BlogSidebar from "../modules/blog/BlogSidebar";

const PostDetailPage = () => {
  const { slug } = useParams();
  const [postDetail, setPostDetail] = useState({});

  // GET ALL POSTS WITH THE SLUG
  useEffect(() => {
    async function fetchPostData() {
      if (!slug) return;
      const slugRef = query(collection(db, "posts"), where("slug", "==", slug));
      onSnapshot(slugRef, (snapshot) => {
        snapshot.forEach((doc) => {
          doc.data() && setPostDetail(doc.data());
        });
      });
    }
    fetchPostData();
  }, [slug]);

  // FIX SCROLL WHEN ROUTING
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [slug]);

  // FORMAT DATE
  const date = postDetail?.createdAt?.seconds
    ? new Date(postDetail?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  const { category, user } = postDetail;

  if (!slug) return <NotFoundPage />;
  if (!postDetail.title) return null;
  return (
    <Layout>
      <div className="pt-[150px]">
        <div className="grid gap-5 mb-10 lg:mb-28 page-container lg:grid-cols-2">
          <BlogImage url={postDetail?.image} size="banner"></BlogImage>
          <div className="flex flex-col gap-2 p-5 rounded-lg md:gap-5 border-gradient post-info bg-colorDarkRedux">
            <div className="flex items-center gap-5 mb-5">
              <BlogCategory className="px-5 py-2">
                {category?.title}
              </BlogCategory>
              <span className="font-semibold md:text-lg">{formatDate}</span>
            </div>
            <BlogTitle className="text-xl md:text-3xl">
              {postDetail.title}
            </BlogTitle>
            <div className="flex items-center gap-5">
              <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] border-colorPrimary border-2 rounded-full">
                <img
                  className="rounded-full imgCover "
                  style={{ imageRendering: "pixelated" }}
                  src={user?.avatar}
                  alt=""
                />
              </div>
              <h1 className="flex-1 text-2xl font-bold select-none md:text-4xl hover:opacity-80 text-linear">
                {user?.username}
              </h1>
            </div>
          </div>
        </div>
        {/* Blog Content */}
        <div className="content-layout blogdetail-container">
          <div className="entry-content">{parse(postDetail.content || "")}</div>
          <BlogSidebar />
        </div>
        <div className="mt-10 lg:mt-28 blogdetail-container">
          <BlogRelated categoryID={category?.id} />
        </div>
      </div>
    </Layout>
  );
};

export default PostDetailPage;
