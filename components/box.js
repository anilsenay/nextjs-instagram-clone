import React from "react";

export default function Box({ children, ...props }) {
  const customClass = props.className + " box";
  return (
    <div
      {...props}
      className={customClass}
      style={
        props.border && {
          border: "1px solid #dbdbdb",
          borderRadius: 3,
          backgroundColor: "white",
        }
      }
    >
      {children}
    </div>
  );
}
