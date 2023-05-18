import React from "react";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import Button from "../button/Button";
import { useAuth } from "../../context/auth-context";
const Header = () => {
  const { userInfo } = useAuth();

  return (
    <header className="fixed top-0 z-[999] w-full py-5 bg-black shadow-md">
      <div className="flex items-center justify-between page-container">
        <Logo />
        <Nav />
        <div className="flex items-center gap-x-5">
          {userInfo ? (
            <Button
              path="/dashboard"
              type="button"
              kind="secondary"
              className="w-[150px]"
            >
              dashboard
            </Button>
          ) : (
            <Button
              path="/sign-up"
              type="button"
              kind="secondary"
              className="w-[130px]"
            >
              sign up
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
