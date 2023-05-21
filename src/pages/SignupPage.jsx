import slugify from "slugify";
import React, { useEffect } from "react";
import Loading from "../components/loading/Loading";
import Label from "../components/label/Label";
import InputPasswordToggle from "../components/input/InputPasswordToggle";
import Input from "../components/input/Input";
import Field from "../components/field/Field";
import Button from "../components/button/Button";
import AuthPage from "./AuthPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRole } from "../utils/constants";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";

// VALIDATE FORM
const schema = yup.object({
  username: yup
    .string()
    .max(20, "Username cannot exceed 20 characters")
    .required("Please enter your username"),
  email: yup
    .string()
    .lowercase()
    .email("Please enter valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .max(8, "Your password must be 8 characters")
    .required("Please enter your password"),
});

const SignupPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onchange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    document.title = "SignUp Page";
  }, []);

  // HANDLE SIGN UP
  const handleSignUp = async (values) => {
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.username,
      photoURL:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    });

    await setDoc(doc(db, "users", auth.currentUser.uid), {
      username: values.username,
      email: values.email,
      password: values.password,
      role: userRole.USER,
      slug: slugify(values.username, { lower: true }),
      avatar:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      createdAt: serverTimestamp(),
    });
    toast.success("Create user successfully !", {
      theme: "colored",
      autoClose: 2000,
      pauseOnHover: false,
    });
    navigate("/");
  };

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

  return (
    <section className="flex items-center justify-center h-screen signupBG">
      <div className="page-container">
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="w-full border-gradient max-w-[600px] p-10 shadow-lg glass-design rounded-lg mx-auto"
        >
          <AuthPage>
            {/* USERNAME */}
            <Field>
              <Label htmlFor="username">Username</Label>
              <Input
                name="username"
                placeholder="Enter your username..."
                control={control}
              />
            </Field>

            {/* EMAIL */}
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                placeholder="Enter your email..."
                control={control}
              />
            </Field>

            {/* PASSWORD */}
            <Field>
              <Label htmlFor="password">Password</Label>
              <InputPasswordToggle control={control}></InputPasswordToggle>
              <div className="flex items-center gap-2 text-sm font-semibold normal-case select-none">
                <p>Already have an account?</p>
                <Link to="/sign-in" className="cursor-pointer text-colorPink">
                  SignIn
                </Link>
              </div>
            </Field>

            {/* BUTTON SUBMIT */}
            <Button
              type="submit"
              kind="secondary"
              className={`w-full h-[53px] md:h-[60px] font-semibold md:text-xl ${
                isSubmitting ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              {isSubmitting ? <Loading /> : "Sign up"}
            </Button>
          </AuthPage>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
