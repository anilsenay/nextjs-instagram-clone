import React from "react";

export default function Clickable({ children, ...props }) {
  return (
    <div {...props} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
}
