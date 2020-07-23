import React from "react";
import ProfilePic from "./profile_pic";

export default function StoryItem({ data }) {
  return (
    <div className="story-item w-20 flex-shrink-0 flex flex-col justify-center items-center">
      <div className={"story-photo-container"}>
        <ProfilePic
          src={data?.image || "https://picsum.photos/seed/picsum/200/200"}
          size={56}
          border
        ></ProfilePic>
      </div>
      <span className="story-username text-black text-12-light mt-1">
        {data?.username || "username"}
      </span>
    </div>
  );
}
