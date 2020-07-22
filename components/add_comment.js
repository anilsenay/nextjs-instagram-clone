import React from "react";

export default function AddComment() {
  return (
    <form method="POST" className="add-comment-container">
      <textarea
        className="add-comment-input"
        placeholder="Add Comment..."
        aria-label="Add Comment..."
      ></textarea>
      <button className="add-comment-button">Share</button>
    </form>
  );
}
