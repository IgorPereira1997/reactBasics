import React from "react";

import Post from './Post';
import Header from "./Header";

const category = "Weekly Posts"
const firstTitle = "News 01 Title";
const firstSub = "News 01 Subs";

const posts = [
  {title: 'Title 01', subtitle: "Subtitle 01", likes: 20},
  {title: 'Title 02', subtitle: "Subtitle 02", likes: 11},
  {title: 'Title 03', subtitle: "Subtitle 03", likes: 67},
  {title: 'Title 04', subtitle: "Subtitle 04", likes: 43},
  {title: 'Title 05', subtitle: "Subtitle 05", likes: 55},
]

function App(){
  return (
    <React.Fragment>
    <Header title="New Major Title">
      <h2>{category}</h2>
    </Header>

      <hr/>

      {posts.map( post =>(
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}

    </React.Fragment>
  );
}

export default App;
