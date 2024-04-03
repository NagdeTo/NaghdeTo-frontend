import React from "react";
import { Button } from "antd";

export default function StyledButton({ children }) {
  return (
    <Button
      className="h-12 w-32 rounded-lg border-primary-1000
       bg-primary-1000 font-medium text-white shadow-md
        hover:bg-primary-900 focus-visible:outline-none"
    >
      {children}
    </Button>
  );
}
