import React, { useState, useRef, useEffect } from "react";
import StoryItem from "./story-item";
import Box from "./box";
import Clickable from "./clickable";

export default function Stories() {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [x, setX] = useState(0);
  const [maxItems, setMaxItems] = useState(7);

  const min_X = -(
    (parseInt(stories.length) - maxItems) * 80 +
    (5 - maxItems) * 15
  );

  const windowRef = useRef(null);

  useEffect(() => {
    setMaxItems(parseInt(windowRef.current.clientWidth / 80));
    console.log(windowRef.current.clientWidth);
  }, [windowRef]);

  const calculateTransform = (newX) => {
    if (newX < min_X) setX(min_X);
    else if (newX > 0) setX(0);
    else setX(newX);
  };

  return (
    <Box className="stories-container sm:full-width" border={true}>
      <div
        className="stories-feed overflow-y-hidden py-4 px-2 flex relative items-center"
        ref={windowRef}
      >
        {x !== 0 && (
          <button
            className="stories-button left-0 z-10"
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
        {x !== min_X && stories.length > maxItems && (
          <button
            className=" stories-button right-0 z-10"
            onClick={() => calculateTransform(x - 320)}
          >
            {">"}
          </button>
        )}
      </div>
    </Box>
  );
}
