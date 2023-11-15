import React from "react";

const category = 'Weekly posts';
const firstTitle = "News 01 Title";
const firstSub = "News 01 Subs";
import Post from './Post';

function App(){
  return (
    <React.Fragment>
      <h1>Igor's JStack Blog</h1>
      <h2>{category}</h2>

      <hr/>

      <Post post={{
        title: firstTitle,
        subtitle: firstSub
      }}
      />
      <Post />
      <Post />
      <Post />
      <Post />

    </React.Fragment>
  );
}

export default App;
