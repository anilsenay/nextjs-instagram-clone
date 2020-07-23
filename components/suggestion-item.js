import React from "react";
import ProfilePic from "./profile_pic";

export default function SuggestionItem({ data }) {
  return (
    <div className="suggestion-item flex">
      <ProfilePic size={32} />
      <div className="suggestion-user-info flex flex-col">
        <span
          className="text-14-bold"
          style={{ paddingBottom: 2, paddingTop: 2 }}
        >
          {data?.username || "username"}
        </span>
        <span className="text-12-light">
          {data?.info || "Followed by username + 99 more"}
        </span>
      </div>
      <div className="follow-button text-12-bold flex items-center ml-auto text-blue">
        Follow
      </div>
    </div>
  );
}
