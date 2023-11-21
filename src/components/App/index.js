import React, { useState} from "react";

import Post from './../Post';
import Header from "./../Header";
import { ThemeProvider } from "./../../context/ThemeContext";

import { Title } from "./styles";

const category = "Weekly Posts"

function App(){

  //UseState handles the recreation of UI after a change in a variable that it
  //is controlling
  const [posts, setPosts] = useState([
    {id: Math.random(), title: 'Title 01', subtitle: "Subtitle 01", likes: 20, read: false, removed: false},
    {id: Math.random(), title: 'Title 02', subtitle: "Subtitle 02", likes: 11, read: true, removed: true},
    {id: Math.random(), title: 'Title 03', subtitle: "Subtitle 03", likes: 67, read: false, removed: false},
    {id: Math.random(), title: 'Title 04', subtitle: "Subtitle 04", likes: 43, read: false, removed: false},
    {id: Math.random(), title: 'Title 05', subtitle: "Subtitle 05", likes: 55, read: false, removed: false},
  ]);

  function handleRefresh(){
    console.log("Clicked here");
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title 0${prevState.length + 1}`,
        subtitle: `Subtitle 0${prevState.length + 1}`,
        likes: Math.floor(Math.random() * 100),
        read: false
      }
    ]);
  }

  function handleRemovePost(postId){
    console.log("Removed post");
    setPosts((prevState) => (
      prevState.map(post => post.id === postId
        ? {...post, removed: true}
        : post
      )
      //filter(post => post.id !== postId)
    ));
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">{category} <br/><button onClick={handleRefresh}>Update</button></Title>
      </Header>

      <hr/>

      {posts.map( post =>(
        <Post
          key={post.id}
          onRemove={() => handleRemovePost(post.id)}
          post={post}
        />
      ))}

    </ThemeProvider>
  );
}

export default App;
