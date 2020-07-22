import React, { useState } from "react";

export default function FeedItemComment({ data }) {
  const [showMore, setShowMore] = useState(data?.description.length < 80);

  return (
    <div className="feed-item-description inherit">
      <a href="#" className="feed-item-text">
        {data?.username || "username"}
      </a>
      <span className={!showMore ? "feed-item-text-description " : "inherit"}>
        {data?.description ||
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}
      </span>
      {!showMore && (
        <span style={{ color: "#9a9a9a" }} onClick={() => setShowMore(true)}>
          {" "}
          more
        </span>
      )}
    </div>
  );
}
