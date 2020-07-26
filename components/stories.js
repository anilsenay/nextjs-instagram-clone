import React, { useState, useRef, useEffect } from "react";
import StoryItem from "./story-item";
import Box from "./box";
import ArrowButton from "./arrow_button";

export default function Stories({ stories }) {
  const [x, setX] = useState(0);
  const [maxItems, setMaxItems] = useState(7);
  const [min_X, setMinX] = useState(0);
  
  const windowRef = useRef(null);

  useEffect(() => {
    setMaxItems(parseInt(windowRef.current.clientWidth / 80));
  }, [windowRef]);
  
  useEffect(() => {
    setMinX((parseInt(stories.length) - maxItems) * 80 +
    (5 - maxItems) * 15)
  }, [maxItems]);

  const calculateTransform = (value) => {
    const newX = x + (value);
    if (newX < min_X) setX(min_X);
    else if (newX > 0) setX(0);
    else setX(newX);
  };

  return (
    <Box className="stories-container sm:full-width" border>
      <div
        className="stories-feed overflow-y-hidden py-4 px-2 flex relative items-center"
        ref={windowRef}
      >
        {x !== 0 && (
          <ArrowButton
            place="left"
            text="<"
            onClick={() => calculateTransform(320)}
          />
        )}
        <div
          className="stories-feed-floating flex relative transition ease-linear duration-300"
          style={{ transform: `translate(${x}px, 0px)` }}
        >
          {stories.map((item) => {
            return <StoryItem data={item} key={item.username} />;
          })}
        </div>
        {x !== min_X && stories.length > maxItems && (
          <ArrowButton
            place="right"
            text=">"
            onClick={() => calculateTransform(-320)}
          />
        )}
      </div>
    </Box>
  );
}
