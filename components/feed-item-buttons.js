import React from "react";
import ActivityIcon from "./icons/activity_icon";
import CommentIcon from "./icons/comment_icon";
import DmIcon from "./icons/dm_icon";
import SaveIcon from "./icons/save_icon";

export default function FeedItemButtons({ ...props }) {
  return (
    <div {...props}>
      <ActivityIcon
        height={24}
        width={24}
        size={24}
        className="feed-item-buttons"
      />
      <CommentIcon height={24} width={24} className="feed-item-buttons" />
      <DmIcon height={24} width={24} className="feed-item-buttons" />
      <SaveIcon height={24} width={24} className="feed-item-buttons ml-auto" />
    </div>
  );
}
