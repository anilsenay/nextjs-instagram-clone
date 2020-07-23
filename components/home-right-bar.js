import React from "react";
import ProfilePic from "./profile_pic";
import RightBarSuggestions from "./right-bar-suggestions";
import UsernameText from "./username-text";

export default function HomeRightBar({ data }) {
  return (
    <div className="suggestions hidden lg:flex lg:flex-col">
      <div className="right-bar-user-info flex items-center">
        <ProfilePic size={56} />
        <div className="user-info-texts ml-5 flex flex-col">
          <UsernameText
            style={{ paddingBottom: 2, paddingTop: 2 }}
            username="username"
          />
          <span className="text-12-light">{data?.name || "Name Surname"}</span>
        </div>
      </div>
      <RightBarSuggestions />
    </div>
  );
}
