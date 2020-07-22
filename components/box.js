import React from "react";

export default function Box({ children, ...props }) {
  return (
    <div className="box flex items-center justify-center" {...props}>
      {children}
    </div>
  );
}
