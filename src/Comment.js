import React from "react";
import List from "./List";

export default function Comment({ commentList }) {
    return commentList.length === 0 ? null : (
        <div style={{ border: "1px solid", margin: "10px" }}>
            {commentList.map((data) => (
                <List data={data} />
                // <>
                //   <h1>{l}</h1>
                //   {/* <input onChange={(e) => console.log(e.target.value)} /> */}
                //   {/* <button>reply</button> */}
                //   <App />
                // </>
            ))}
        </div>
    );
}
