import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { IPost } from "./types";

function App() {
  
  const [post, setPost] = useState<IPost[]>([])

  useEffect(() => {
    fetch("/api/posts")
    .then((res) => res.json())
    .then(data => setPost(data))
  },[])

  return (
    <div className="App">
      <div>Hello Dubsado</div>
      {
        post.map((pos) =>
        <div id="box">
          <h2>{pos.handle}</h2>
          <img id='avatar' src={pos.avatar}/>
          <img src={pos.image} />
          <h3>{pos.likes}</h3>
          <h3>{pos.caption}</h3>
        </div>
        )
      }
    </div>
  );
}

export default App;
