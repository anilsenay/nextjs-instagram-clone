import React from "react";
import ProfilePic from "./profile_pic";
import MoreSettings from "./icons/more_icon";

export default function FeedItemHeader({ username, image }) {
  return (
    <div className="feed-item-header flex items-center">
      <ProfilePic src={image} size={32} />
      <a className="feed-item-header-text feed-item-text text-l-m-16" href="">
        {username || "username"}
      </a>
      <button className="ml-auto flex">
        <MoreSettings />
      </button>
    </div>
  );
}
