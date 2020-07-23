import React from "react";
import SearchBar from "./search_bar";
import HomeIcon from "./icons/home_icon";
import DmIcon from "./icons/dm_icon";
import ExploreIcon from "./icons/explore_icon";
import ActivityIcon from "./icons/activity_icon";
import ProfilePic from "./profile_pic";
import Clickable from "./clickable";
import { useLoginUserData } from "../hooks/global_hook";

export default function Header({ user }) {
  const loginUserData = useLoginUserData();
  return (
    <nav className="navigation fixed z-20 top-0">
      <div className="header-container">
        <Clickable href="/">
          <img src="../static/images/logo.png" className="header-logo" />
        </Clickable>
        <SearchBar />
        <div className="header-icons flex ml-auto">
          <Clickable href="/">
            <HomeIcon className="header-icon" />
          </Clickable>
          <Clickable href="/messages">
            <DmIcon className="header-icon" />
          </Clickable>
          <Clickable href="/explore">
            <ExploreIcon className="header-icon" />
          </Clickable>
          <Clickable href="/activity">
            <ActivityIcon className="header-icon" />
          </Clickable>
          <ProfilePic
            src={loginUserData?.image}
            username={loginUserData?.username}
            size={22}
          />
        </div>
      </div>
    </nav>
  );
}
