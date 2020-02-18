// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [data] = useState(props.comments);
  console.log("Comments", data);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {data.map((comment, name) =>(
        <Comment key = {name} comment = {comment}/>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
