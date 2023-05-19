import React from "react";
import Logo from "../components/logo/Logo";

const AuthPage = ({ children }) => {
  return (
    <>
      <Logo className="flex items-center justify-center mb-10 text-3xl md:text-5xl md:mb-16" />
      {children}
    </>
  );
};

export default AuthPage;
