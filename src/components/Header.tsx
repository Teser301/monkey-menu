import React from "react";
import Button from "./Button";

const Header: React.FC = () => {
  return (
    <header className="p-8 pb-20 gap-16 sm:p-20 relative grid grid-cols-2 items-center max-w-4xl mx-auto">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-center">
          Digital Menus That Serve You Better!
        </h1>
        <div className="flex justify-around m-5">
          <Button className="w-auto">Click me</Button>
          <Button className="w-auto" href="#">
            Signup
          </Button>
        </div>
      </div>
      <div className="relative w-50 h-96">
        <img
          src="https://oddmenu.com/images/landing/first-screen/app-2-en.webp"
          alt=""
          className="max-w-32 absolute top-0 right-0 rotate-12"
        />
        <img
          src="https://oddmenu.com/images/landing/first-screen/app-1-en.webp"
          alt=""
          className="max-w-40 absolute top-0 left-0 -rotate-12"
        />
      </div>
    </header>
  );
};

export default Header;
