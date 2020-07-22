import React from "react";
import Box from "./box";
import FeedItemHeader from "./feed-item-header";
import FeedItemButtons from "./feed-item-buttons";
import FeedItemComment from "./feed-item-comment";
import AddComment from "./add_comment";

export default function FeedItem({ data }) {
  return (
    <Box className="feed-item-container flex flex-col">
      <FeedItemHeader image={data?.image} username={data?.username} />
      <img
        className="flex-1 object-fill"
        src={data?.image || "https://picsum.photos/400/400"}
      />
      <FeedItemButtons className="feed-item-buttons-container flex items-center" />
      <a href="#" className="feed-item-text text-l-m-16">
        {data?.likes || "0"} likes
      </a>
      <FeedItemComment data={data?.userComment} />
      <a
        className="feed-item-description"
        style={{ color: "#9a9a9a", display: "flex" }}
        href="#"
      >
        Wiew all {data?.commentCount || "0"} comment
      </a>
      <FeedItemComment data={{ description: "Hellooo, nice pic!" }} />
      <FeedItemComment data={{ description: "Wow, you look nice!" }} />
      <a href="#" className="feed-item-date-text">
        12 HOURS AGO
      </a>
      <AddComment />
    </Box>
  );
}
