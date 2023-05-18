import React from "react";
import Logo from "../components/logo/Logo";

const AuthPage = ({ children }) => {
  return (
    <>
      <Logo className="flex items-center justify-center mb-16 text-5xl" />
      {children}
    </>
  );
};

export default AuthPage;
