import React from "react";
import ActivityIcon from "./icons/activity_icon";
import CommentIcon from "./icons/comment_icon";
import DmIcon from "./icons/dm_icon";
import SaveIcon from "./icons/save_icon";
import Clickable from "./clickable";

export default function FeedItemButtons({ ...props }) {
  return (
    <div {...props}>
      <Clickable className="feed-item-buttons">
        <ActivityIcon height={24} width={24} size={24} />
      </Clickable>
      <Clickable className="feed-item-buttons">
        <CommentIcon height={24} width={24} />
      </Clickable>
      <Clickable className="feed-item-buttons">
        <DmIcon height={24} width={24} />
      </Clickable>
      <Clickable className="feed-item-buttons ml-auto">
        <SaveIcon height={24} width={24} />
      </Clickable>
    </div>
  );
}
