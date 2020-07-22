import React, { useState } from "react";
import StoryItem from "./story-item";
import Box from "./box";

export default function Stories() {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [x, setX] = useState(0);
  const min_X = -((parseInt(stories.length) - 7) * 80 - 30);
  console.log(min_X);

  const calculateTransform = (newX) => {
    if (newX < min_X) setX(min_X);
    else if (newX > 0) setX(0);
    else setX(newX);
  };

  return (
    <Box className="stories-container">
      <div className="stories-feed flex relative items-center">
        {x !== 0 && (
          <button
            className="absolute stories-button left-0 z-10"
            onClick={() => calculateTransform(x + 320)}
          >
            {"<"}
          </button>
        )}
        <div
          className="stories-feed-floating flex relative transition ease-linear duration-300"
          style={{ transform: `translate(${x}px, 0px)` }}
        >
          {stories.map((item) => {
            return <StoryItem data={item} key={item} />;
          })}
        </div>
        {x !== min_X && stories.length > 7 && (
          <button
            className="absolute stories-button right-0 z-10"
            onClick={() => calculateTransform(x - 320)}
          >
            {">"}
          </button>
        )}
      </div>
    </Box>
  );
}
