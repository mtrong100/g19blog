import React, { useState } from "react";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import Button from "../button/Button";
import { useAuth } from "../../context/auth-context";
import NavMobile from "../nav/NavMobile";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const { userInfo } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-[999] w-full py-3 md:py-5 bg-colorDarkest shadow-md">
      <div className="flex items-center justify-between page-container">
        <div className="flex items-center gap-3">
          <span onClick={() => setOpen(!open)} className="text-4xl lg:hidden">
            <BiMenu />
          </span>
          <Logo />
        </div>
        <Nav />
        <NavMobile open={open} setOpen={setOpen} />
        <div className="flex items-center gap-x-5">
          {userInfo ? (
            <Button
              className="px-6"
              path="/dashboard"
              type="button"
              kind="secondary"
            >
              dashboard
            </Button>
          ) : (
            <Button
              className="px-10"
              path="/sign-up"
              type="button"
              kind="secondary"
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
