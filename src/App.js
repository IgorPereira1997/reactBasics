import React from "react";

import Post from './Post';
import Header from "./Header";

const category = "Weekly Posts"
const firstTitle = "News 01 Title";
const firstSub = "News 01 Subs";

function App(){
  return (
    <React.Fragment>
    <Header title="New Major Title">
      <h2>{category}</h2>
    </Header>

      <hr/>

      <Post
        likes={20}
        post={{
          title: firstTitle,
          subtitle: firstSub
        }}
      />
      <Post
        likes={30}
        post={{
          title: firstTitle,
          subtitle: firstSub
        }}
      />
      <Post
        likes={11}
        post={{
          title: firstTitle + "2",
          subtitle: firstSub + "2"
        }}
      />
      <Post
        likes={37}
        post={{
          title: firstTitle + "3",
          subtitle: firstSub + "3"
        }}
      />
      <Post
        likes={52}
        post={{
          title: firstTitle + "4",
          subtitle: firstSub + "4"
        }}
      />

    </React.Fragment>
  );
}

export default App;
