import React, { useRef, useEffect, useState } from "react";

export default function AddComment() {
  const changeRef = useRef(null);
  const [textAreaSize, setAreaSize] = useState(18);

  return (
    <form method="POST" className="add-comment-container">
      <textarea
        className="add-comment-input"
        style={{ height: textAreaSize }}
        placeholder="Add Comment..."
        aria-label="Add Comment..."
        ref={changeRef}
        onChange={() => setAreaSize(changeRef.current.scrollHeight)}
      ></textarea>
      <button className="add-comment-button">Share</button>
    </form>
  );
}
