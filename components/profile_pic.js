import React from "react";
import Clickable from "./clickable";
import Link from "next/link";

export default function ProfilePic({
  src = "https://instagram.fsaw1-3.fna.fbcdn.net/v/t51.2885-19/s150x150/88129994_218553312873090_187843388282765312_n.jpg?_nc_ht=instagram.fsaw1-3.fna.fbcdn.net&_nc_ohc=siFEGZag29UAX9Sytdg&oh=56e1226fa0938ff569eb491980eb95a7&oe=5F4278CA",
  username = "anilsenay",
  size,
  border,
  href,
  ...props
}) {
  return (
    <Link href={href || "#"}>
      <img
        alt={`${username}'s profile pic`}
        data-testid="user-avatar"
        draggable="false"
        src={src}
        style={{
          width: size,
          height: size,
          borderRadius: size,
          border: border && "2px solid white",
          cursor: "pointer",
        }}
      ></img>
    </Link>
  );
}
