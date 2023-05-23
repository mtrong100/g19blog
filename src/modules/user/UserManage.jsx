import Table from "../../components/table/Table";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import LabelRole from "../../components/label/LabelRole";
import IconView from "../../components/icons/IconView";
import IconEdit from "../../components/icons/IconEdit";
import IconDelete from "../../components/icons/IconDelete";
import Heading from "../../components/heading/Heading";
import Button from "../../components/button/Button";
import { v4 } from "uuid";
import { userRole, userStatus } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { tableUserTh } from "../../data/data";
import { doc, collection, onSnapshot, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-toastify";

const UserManage = () => {
  const { userInfo } = useAuth();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  // NAVIGATE IF ROLE IS UER
  useEffect(() => {
    if (userInfo?.role === userRole.USER || userInfo?.role === userRole.MOD) {
      navigate(`/manage/update-user?id=${userInfo.uid}`);
    }
  }, [navigate, userInfo?.role, userInfo.uid]);

  // RENDER POST STATUS
  const renderUserRole = (role) => {
    switch (role) {
      case userRole.ADMIN:
        return <LabelRole type="admin">Admin</LabelRole>;
      case userRole.MOD:
        return <LabelRole type="mod">Mod</LabelRole>;
      case userRole.USER:
        return <LabelRole type="user">User</LabelRole>;
      default:
        break;
    }
  };

  // GET POST DATA FROM FIREBASE
  useEffect(() => {
    async function getPostData() {
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
    getPostData();
  }, []);

  // SEARCH USER
  const searchUser = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // FILTER POSTS
  const filterUsers = searchUser.filter((user) => {
    if (filter === "all") {
      return true;
    } else {
      return user.role === filter;
    }
  });

  // HANDLE DELETE USER
  const handleDeleteUser = async (userID) => {
    const docRef = doc(db, "users", userID);
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
      toast.error("only ADMIN can delete users !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  };

  return (
    <>
      <Heading>users manage</Heading>
      <div className="flex justify-between py-10">
        <Button
          type="button"
          kind="secondary"
          className="h-[55px]"
          path="/manage/add-user"
        >
          Add new user
        </Button>
        <div className="flex items-center gap-10">
          {/* ==== FILTER === */}
          <select
            className="py-2 w-[150px] text-lg border border-solid rounded bg-colorDarkRedux border-colorPrimary"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value={userRole.ADMIN}>Admin</option>
            <option value={userRole.MOD}>Mod</option>
            <option value={userRole.USER}>User</option>
          </select>
          {/* SEARCH */}
          <div className="w-full flex items-center py-4 px-5 gap-3 max-w-[300px] border-2 border-solid rounded-full border-colorPrimary">
            <span className="text-2xl">
              <AiOutlineSearch />
            </span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="w-full"
              placeholder="Search user..."
            />
          </div>
        </div>
      </div>
      {/* ==== TABLE LAYOUT === */}
      <Table>
        <thead>
          <tr>
            {tableUserTh.map((item) => (
              <th key={v4()}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterUsers.length > 0 &&
            filterUsers.map((user) => {
              // FORMAT DATE TO DISPLAY
              const date = user?.createdAt?.seconds
                ? new Date(user?.createdAt?.seconds * 1000)
                : new Date();
              const formatDate = new Date(date).toLocaleDateString("vi-VI");

              return (
                <tr key={user.id}>
                  <td>
                    <div className="flex items-center gap-5">
                      <div className="w-[60px] h-[60px] rounded-full">
                        <img
                          src={user.avatar}
                          alt=""
                          className="rounded-full imgCover"
                        />
                      </div>
                      <div className="flex-col flex-1 gap-3 whitespace-pre-wrap">
                        <h3 className="font-semibold text-sm hover:opacity-90 mb-1 max-w-[300px] capitalize  leading-relaxed">
                          {user.username}
                        </h3>
                        <time className="text-sm font-bold text-gray-500">
                          {`Date: ${formatDate}`}
                        </time>
                      </div>
                    </div>
                  </td>
                  <td className="overflow-x-hidden">
                    <span className="inline-block px-4 py-3 text-sm font-semibold text-center rounded-lg w-fit hover:opacity-90 bg-colorDarkSaga text-colorPrimary">
                      {user.email}
                    </span>
                  </td>
                  <td>
                    <span className="inline-block px-4 py-3 text-sm font-semibold text-center rounded-lg w-fit hover:opacity-90 bg-colorDarkSaga text-colorSaga">
                      {user.password}
                    </span>
                  </td>
                  <td>{renderUserRole(user.role)}</td>
                  <td>
                    <div className="flex items-center text-gray-500 gap-x-3">
                      <IconView />
                      <IconEdit
                        onClick={() =>
                          navigate(`/manage/update-user?id=${user.id}`)
                        }
                      />
                      <IconDelete onClick={() => handleDeleteUser(user.id)} />
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

export default UserManage;
