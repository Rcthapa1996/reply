import React, { useState } from "react";
import App from "./App";

export default function List({ data }) {
    const [showReply, setShowReply] = useState(true);
    return (
        <>
            <h1>{data}</h1>
            {showReply ? (
                <button onClick={() => setShowReply(false)}>reply</button>
            ) : (
                <App />
            )}
        </>
    );
}
