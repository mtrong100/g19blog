import "swiper/css";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import DashboardPage from "./pages/DashboardPage";
import DashboardLayout from "./modules/dashboard/DashboardLayout";
import PostManage from "./modules/post/PostManage";
import PostAddNew from "./modules/post/PostAddNew";
import CategoryAddNew from "./modules/category/CategoryAddNew";
import CategoryManage from "./modules/category/CategoryManage";
import UserManage from "./modules/user/UserManage";
import UserAddNew from "./modules/user/UserAddNew";
import UserUpdate from "./modules/user/UserUpdate";
import CategoryUpdate from "./modules/category/CategoryUpdate";
import PostUpdate from "./modules/post/PostUpdate";
import PostDetailPage from "./pages/PostDetailPage";
import CategoryPage from "./pages/CategoryPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserPage from "./pages/UserPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const SigninPage = lazy(() => import("./pages/SigninPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <>
      <AuthProvider>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <span className="loadingSpin"></span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SigninPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/:slug" element={<PostDetailPage />}></Route>
            <Route path="/category/:slug" element={<CategoryPage />}></Route>
            <Route path="/profile/:slug" element={<UserProfilePage />}></Route>
            <Route path="/user" element={<UserPage />}></Route>

            {/* ============ DASHBOARD =========== */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardPage />}></Route>
              {/* ============ POST =============== */}
              <Route path="/manage/post" element={<PostManage />}></Route>
              <Route path="/manage/add-post" element={<PostAddNew />}></Route>
              <Route
                path="/manage/update-post"
                element={<PostUpdate />}
              ></Route>
              {/* ============ CATEGORY =========== */}
              <Route
                path="/manage/category"
                element={<CategoryManage />}
              ></Route>
              <Route
                path="/manage/add-category"
                element={<CategoryAddNew />}
              ></Route>
              <Route
                path="/manage/update-category"
                element={<CategoryUpdate />}
              ></Route>
              {/* ============ USER =============== */}
              <Route path="/manage/user" element={<UserManage />}></Route>
              <Route path="/manage/add-user" element={<UserAddNew />}></Route>
              <Route
                path="/manage/update-user"
                element={<UserUpdate />}
              ></Route>
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </>
  );
}

export default App;
