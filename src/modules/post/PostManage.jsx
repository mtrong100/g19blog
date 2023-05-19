import Table from "../../components/table/Table";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import LabelStatus from "../../components/label/LabelStatus";
import IconView from "../../components/icons/IconView";
import IconEdit from "../../components/icons/IconEdit";
import IconDelete from "../../components/icons/IconDelete";
import Heading from "../../components/heading/Heading";
import Button from "../../components/button/Button";
import { v4 } from "uuid";
import { tableTh } from "../../data/data";
import { postStatus, userRole } from "../../utils/constants";
import {
  doc,
  collection,
  onSnapshot,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";

const PostManage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (window.innerWidth <= 768) {
      navigate("/");
      toast.error("Not available for mobile and tablet  !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  }, [navigate]);

  // RENDER POST STATUS
  const renderStatus = (status) => {
    switch (status) {
      case postStatus.APPROVED:
        return <LabelStatus type="success">Approved</LabelStatus>;
      case postStatus.PENDING:
        return <LabelStatus type="warning">Pending</LabelStatus>;
      case postStatus.REJECTED:
        return <LabelStatus type="danger">Rejected</LabelStatus>;
      default:
        break;
    }
  };

  // GET POST DATA FROM FIREBASE
  useEffect(() => {
    if (userInfo?.role === userRole.USER) {
      fetchUserPostData();
    } else {
      getPostData();
    }
    /* FETCH POST DATA */
    async function fetchUserPostData() {
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
    /* FETCH ALL POSTS DATA */
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
      });
    }
  }, [userInfo?.role, userInfo.uid]);

  // SEARCH POSTS
  const searchPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // FILTER POSTS
  const filterPosts = searchPosts.filter((post) => {
    if (filter === "all") {
      return true;
    } else {
      return post.status === filter;
    }
  });

  // HANDLE DELETE POST
  const handleDeletePost = async (postID) => {
    const docRef = doc(db, "posts", postID);
    if (userInfo.role === userRole.ADMIN) {
      Swal.fire({
        title: "Are you sure you want to delete this user?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteDoc(docRef);
          await Swal.fire("Deleted!", "User has been deleted.", "success");
        }
      });
    } else {
      toast.error("only ADMIN can delete posts !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  };

  return (
    <>
      <Heading>posts manage</Heading>
      <div className="flex justify-between py-10">
        <Button
          type="button"
          kind="secondary"
          className="h-[55px]"
          path="/manage/add-post"
        >
          Add new post
        </Button>
        <div className="flex items-center gap-10">
          {/* ==== FILTER === */}
          <select
            className="py-2 w-[150px] text-lg border border-solid rounded bg-colorDime border-colorPink"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value={postStatus.APPROVED}>Approved</option>
            <option value={postStatus.PENDING}>Pending</option>
            <option value={postStatus.REJECTED}>Rejected</option>
          </select>
          {/* ==== SEARCH === */}
          <div className="w-full flex items-center py-4 px-5 gap-3 max-w-[300px] border-2 border-solid rounded-full border-colorPink">
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
        </div>
      </div>
      {/* ==== TABLE LAYOUT === */}
      <Table>
        <thead>
          <tr>
            {tableTh.map((item) => (
              <th key={v4()}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterPosts.length > 0 &&
            filterPosts.map((post) => {
              // FORMAT DATE TO DISPLAY
              const date = post?.createdAt?.seconds
                ? new Date(post?.createdAt?.seconds * 1000)
                : new Date();
              const formatDate = new Date(date).toLocaleDateString("vi-VI");
              const { user, category } = post;
              return (
                <tr key={post.id}>
                  <td>
                    <div className="flex items-center gap-x-3">
                      <img
                        src={post.image}
                        alt=""
                        className="w-[100px] select-none h-[80px] rounded object-cover"
                      />
                      <div className="flex-1 whitespace-pre-wrap">
                        <h3 className="font-semibold hover:opacity-90 mb-1 max-w-[300px] capitalize  leading-relaxed">
                          {post.title}
                        </h3>
                        <time className="text-sm font-bold text-gray-500">
                          {`Date: ${formatDate}`}
                        </time>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="hover:opacity-90 italic capitalize select-none inline-block px-[15px] w-[100px] text-center rounded-lg font-semibold bg-colorDark text-colorPink text-sm py-[10px]">
                      {category?.title}
                    </span>
                  </td>
                  <td>
                    <span className="font-semibold text-gray-500 capitalize">
                      {user?.username}
                    </span>
                  </td>
                  <td>{renderStatus(post.status)}</td>
                  <td>
                    <div className="flex items-center text-gray-500 gap-x-3">
                      <IconView onClick={() => navigate(`/${post.slug}`)} />
                      <IconEdit
                        onClick={() =>
                          navigate(`/manage/update-post?id=${post.id}`)
                        }
                      />
                      <IconDelete onClick={() => handleDeletePost(post.id)} />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default PostManage;
