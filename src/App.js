import React from "react";

import Post from './Post';
import Header from "./Header";

const category = "Weekly Posts"
const firstTitle = "News 01 Title";
const firstSub = "News 01 Subs";

function App(){
  return (
    <React.Fragment>
    <Header title="Igor's JStack Blog">
      <h2>{category}</h2>
    </Header>

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
