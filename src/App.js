import "./App.css";
import React, { useState, useRef } from "react";
import Comment from "./Comment";

export default function App() {
  const inputRef = useRef(null);
  const [cmt, setCmt] = useState("");
  const [commentList, setCommentList] = useState([]);
  return (
    <div className="App">
      <input
        ref={inputRef}
        onChange={(e) => {
          setCmt(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCommentList([...commentList, cmt]);
          inputRef.current.value = "";
        }}
      >
        Comment
      </button>
      <Comment commentList={commentList} />
    </div>
  );
}
