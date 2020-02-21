// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [data] = useState(props.comments);
  //console.log("Comments", data);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {data.map((p) =>(
        <Comment key = {p.username} comment = {p}/>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
