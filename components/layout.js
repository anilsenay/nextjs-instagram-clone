import React from "react";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="homepage-container flex justify-center">{children}</div>
    </div>
  );
}
