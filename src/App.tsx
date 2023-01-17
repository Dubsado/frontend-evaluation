import React, { useEffect, useState } from "react";
import "./App.css";
import { IPost } from "./types";

// TODO: CRUD - Note API doesn't appear to have all routes open
// - [ ] Commenting, deleting own comments & posts, reporting posts
// - [ ] Create Patch to edit caption, comments
// - [ ] Increment and decrement likes

// Future: Admin, auth, infinite scroll, ranking by likes/comment volume
// - [ ] weigh logic of front loading home feed
// - [ ] yarn add react-router and provide a nav, profile
// - [ongoing] seperate code into corresponding folders

function App() {
  
  const [post, setPost] = useState<IPost[]>([])
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("/api/posts")
    .then((res) => res.json())
    .then(data => setPost(data))
  },[])

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    console.log(event.target.value); 
  };

  return (
    <div className="App">
      <h1 className="nav">Hello Dubsado</h1>
      {
        post.map((pos) =>
        <div className="box">
          <h2>
            <span>
              <img className="avatar" src={pos.avatar} alt="avatar image"/>
            </span>{pos.handle}
          </h2>
          <img className="feed-img" src={pos.image} alt="feed image"/>
          <div className="likes">
            <button>Likes</button>
            {pos.likes.toString().replace(/(\d{1,3})(?=(\d{3})+(?!\d))/g, "$1,")}
          </div>
          <p>{pos.caption}</p>
          <input 
            type="text" 
            value={value} 
            placeholder="Add Comment" 
            onChange={handleChange}
          />
          <span><button>Post</button></span>
        </div>
        )
      }
    </div>
  );
}

export default App;
