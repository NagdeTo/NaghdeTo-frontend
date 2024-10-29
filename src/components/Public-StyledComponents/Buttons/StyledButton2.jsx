import React from "react";
import { Button } from "antd";

export default function StyledButton2({ children }) {
  return (
    <Button
      className="h-12 w-32 rounded-lg border-primary-1000
       bg-none font-medium text-primary-1000 shadow-md
        hover:bg-primary-1000 hover:text-white "
    >
      {children}
    </Button>
  );
}
