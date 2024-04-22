import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export default function GoToHome() {
  return (
    <Link
      className="fixed left-[35px] top-[35px] flex h-8 w-8 items-center 
        justify-center rounded-md bg-primary-1000"
      to="/"
    >
      <AiOutlineHome className="h-5 w-5 text-white" />
    </Link>
  );
}
