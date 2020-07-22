import React from "react";
import ProfilePic from "./profile_pic";

export default function StoryItem({ data }) {
  return (
    <div className="story-item flex flex-col justify-center items-center">
      <div className={"story-photo-container"}>
        <ProfilePic
          src={data?.image || "https://picsum.photos/seed/picsum/200/200"}
          size={56}
          border
        ></ProfilePic>
      </div>
      <span className="story-username">{data?.username || "username"}</span>
    </div>
  );
}
