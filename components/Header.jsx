import React from "react";
import logo from "../src/assets/logo.svg";

function Header() {
  return (
    <header className="border  border-black border-b-2 bg-slate-500 py-8 flex justify-between">
      <img src={logo} alt="logo" className="w-[113px] h-[32px] mx-5" />
      <span className="text-sm mx-5 ">START SLIDESHOW</span>
    </header>
  );
}

export default Header;
