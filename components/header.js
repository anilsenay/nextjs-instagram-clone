import React from "react";
import SearchBar from "./search_bar";
import HomeIcon from "./icons/home_icon";
import DmIcon from "./icons/dm_icon";
import ExploreIcon from "./icons/explore_icon";
import ActivityIcon from "./icons/activity_icon";
import ProfilePic from "./profile_pic";

export default function Header() {
  return (
    <nav className="navigation">
      <div className="header-container">
        <img src="../static/images/logo.png" className="header-logo" />
        <SearchBar />
        <div className="header-icons">
          <HomeIcon className="header-icon" />
          <DmIcon className="header-icon" />
          <ExploreIcon className="header-icon" />
          <ActivityIcon className="header-icon" />
          <ProfilePic size={22} />
        </div>
      </div>
    </nav>
  );
}
