import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

export default function GoToTop() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Link
      className="fixed bottom-[35px] left-[35px] flex h-8 w-8 items-center 
        justify-center rounded-md bg-primary-1000"
      onClick={scrollToTop}
    >
      <FaArrowUp className="h-5 w-5 text-white" />
    </Link>
  );
}
