import useFirebaseImage from "../../hooks/useFirebaseImage";
import slugify from "slugify";
import Select from "../../components/dropdown/Select";
import React, { useEffect, useMemo, useState } from "react";
import Radio from "../../components/radio/Radio";
import Option from "../../components/dropdown/Option";
import Loading from "../../components/loading/Loading";
import List from "../../components/dropdown/List";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import ImageUpload from "../../components/image/ImageUpload";
import Heading from "../../components/heading/Heading";
import Field from "../../components/field/Field";
import Dropdown from "../../components/dropdown/Dropdown";
import Button from "../../components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import { postPromoted, postStatus, userRole } from "../../utils/constants";
import { db } from "../../firebase-app/firebase-config";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
Quill.register("modules/imageUploader", ImageUploader);
import axios from "axios";
import {
  where,
  query,
  getDocs,
  getDoc,
  doc,
  collection,
  updateDoc,
} from "firebase/firestore";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

// VALIDATE FORM
const schema = yup.object({
  title: yup.string().required("Please enter your title !"),
});

const PostUpdate = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const postID = params.get("id");
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onchange",
    resolver: yupResolver(schema),
  });

  const imageUrl = getValues("image");
  const imageName = getValues("image_name");
  const watchStatus = watch("status");
  const watchPromote = watch("promote");
  // USE HOOK (useFirebaseImage) TO HANDLE UPLOAD IMAGE
  const { image, setImage, progress, handleSelectImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues, imageName);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [content, setContent] = useState("");

  // CHANGE TITLE PAGE
  useEffect(() => {
    document.title = "G19BLOG - Update Post";
  }, []);

  // FETCH DATA POST
  useEffect(() => {
    async function fetchPostData() {
      if (!postID) return;
      const docRef = doc(db, "posts", postID);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.data()) {
        reset(docSnapshot.data());
        setSelectCategory(docSnapshot.data()?.category || "");
        setContent(docSnapshot.data()?.content || "");
      }
    }
    fetchPostData();
  }, [postID, reset]);

  // HANDLE GET CATEGORIES
  useEffect(() => {
    async function getCategoriesData() {
      const colRef = collection(db, "categories");
      const q = query(colRef, where("status", "==", "approved"));
      const querySnapshot = await getDocs(q);
      let results = [];
      querySnapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(results);
    }
    getCategoriesData();
  }, []);

  // GET POST IMAGE
  useEffect(() => {
    setImage(imageUrl);
  }, [imageUrl, setImage]);

  // HANDLE SELECTED CATEGORY
  const handleSelectedCategory = async (category) => {
    const colRef = doc(db, "categories", category.id);
    const docData = await getDoc(colRef);
    setValue("category", {
      id: docData.id,
      ...docData.data(),
    });
    setSelectCategory(category);
  };

  // HANDLE UPDATE POST
  const handleUpdatePost = async (values) => {
    if (!isValid) return;
    try {
      const docRef = doc(db, "posts", postID);
      values.slug = slugify(values.title, { lower: true });
      await updateDoc(docRef, {
        ...values,
        content,
        image,
      });
      toast.success("Update post successfully !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
      navigate("/manage/post");
    } catch (error) {
      toast.error("Failed to update post !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  };

  // MODULES FOR REACT-QUILL
  const API_KEY = "9a11f0b1324b260553f2e8b764d9b2b1";
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["clean"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const res = await axios({
            method: "post",
            url: `https://api.imgbb.com/1/upload?key=${API_KEY}`,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipath/form-data",
            },
          });
          return res.data.data.url;
        },
      },
    }),
    []
  );

  // DISPLAY ERROR MESSAGES
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  }, [errors]);

  if (!postID) return null;
  return (
    <div>
      <Heading>Update post</Heading>
      <form className="pt-14" onSubmit={handleSubmit(handleUpdatePost)}>
        <div className="grid grid-cols-2 gap-10 mb-10">
          {/* ==================== Title ============================ */}
          <Field>
            <Label>Title ✒️</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
            ></Input>
          </Field>
          {/* ==================== Category ============================ */}
          <Field>
            <Label>Category 📦</Label>
            <Dropdown>
              <Select placeholder="Select Category"></Select>
              <List>
                {categories.length > 0 &&
                  categories.map((category) => (
                    <Option
                      key={category.id}
                      onClick={() => handleSelectedCategory(category)}
                    >
                      {category.title}
                    </Option>
                  ))}
              </List>
            </Dropdown>
            {/* DISPLAY CATEGORY WHEN DROPDOWN SELECTED */}
            {selectCategory?.title && (
              <span className="inline-block p-3 text-sm font-medium rounded-lg bg-colorGradient">
                {`#${selectCategory?.title}`}
              </span>
            )}
          </Field>
        </div>
        <div className="grid items-center grid-cols-2 mb-10 gap-x-10">
          {/* ==================== Image ============================ */}
          <Field>
            <Label>Image 🖼️</Label>
            <ImageUpload
              onChange={handleSelectImage}
              handleDeleteImage={handleDeleteImage}
              progress={progress}
              image={image}
            ></ImageUpload>
            <input type="file" name="image" className="hidden-input" />
          </Field>
          <div className="flex flex-col gap-20">
            {(userInfo?.role === userRole.ADMIN ||
              userInfo?.role === userRole.MOD) && (
              <>
                {/* ===================== Prommoted ======================== */}
                <Field>
                  <Label>Promote Post ✅</Label>
                  <div className="flex items-center gap-x-5">
                    <Radio
                      name="promote"
                      control={control}
                      checked={watchPromote === postPromoted.FEATURE}
                      value={postPromoted.FEATURE}
                    >
                      Feature
                    </Radio>
                    <Radio
                      name="promote"
                      control={control}
                      checked={watchPromote === postPromoted.BEST}
                      value={postPromoted.BEST}
                    >
                      Best
                    </Radio>
                    <Radio
                      name="promote"
                      control={control}
                      checked={watchPromote === postPromoted.HOT}
                      value={postPromoted.HOT}
                    >
                      Hot
                    </Radio>
                  </div>
                </Field>
                {/* ====================== Status ======================= */}
                <Field>
                  <Label>Status 📉</Label>
                  <div className="flex items-center gap-x-5">
                    <Radio
                      name="status"
                      control={control}
                      checked={watchStatus === postStatus.APPROVED}
                      value={postStatus.APPROVED}
                    >
                      Approved
                    </Radio>
                    <Radio
                      name="status"
                      control={control}
                      checked={watchStatus === postStatus.PENDING}
                      value={postStatus.PENDING}
                    >
                      Pending
                    </Radio>
                    <Radio
                      name="status"
                      control={control}
                      checked={watchStatus === postStatus.REJECTED}
                      value={postStatus.REJECTED}
                    >
                      Reject
                    </Radio>
                  </div>
                </Field>
              </>
            )}
          </div>
        </div>
        <div className="mb-10">
          <Field>
            <Label>Content ✍️</Label>
            <div className="w-full entry-content">
              <ReactQuill
                modules={modules}
                theme="snow"
                value={content}
                onChange={setContent}
              />
            </div>
          </Field>
        </div>
        {/* ======================= Button ===================== */}
        <Button
          id="update-post"
          type="submit"
          kind="secondary"
          className={`w-[200px] mx-auto h-[65px] font-semibold text-xl ${
            isSubmitting ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {isSubmitting ? <Loading /> : "update post"}
        </Button>
      </form>

      {/* scroll to top */}
      <a href="#">
        <div className="fixed shadow-2xl w-[50px] h-[50px] rounded-full bottom-20 right-5 flex items-center justify-center bg-colorSecondary text-white z-40 cursor-pointer font-bold text-2xl">
          <BiUpArrowAlt></BiUpArrowAlt>
        </div>
      </a>

      {/* scroll to bottom */}
      <a href="#update-post">
        <div className="fixed shadow-2xl w-[50px] h-[50px] rounded-full bottom-5 right-5 flex items-center justify-center bg-colorSecondary text-white z-40 cursor-pointer font-bold text-2xl">
          <BiDownArrowAlt></BiDownArrowAlt>
        </div>
      </a>
    </div>
  );
};

export default PostUpdate;
