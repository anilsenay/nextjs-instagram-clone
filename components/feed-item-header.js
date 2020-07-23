import React from "react";
import ProfilePic from "./profile_pic";
import MoreSettings from "./icons/more_icon";

export default function FeedItemHeader({ username, image }) {
  return (
    <div className="feed-item-header pl-4 pr-4 bg-white flex items-center">
      <ProfilePic src={image} size={32} />
      <a className="feed-item-header-text text-14-bold mr-1 ml-4" href="">
        {username || "username"}
      </a>
      <button className="ml-auto flex">
        <MoreSettings />
      </button>
    </div>
  );
}
