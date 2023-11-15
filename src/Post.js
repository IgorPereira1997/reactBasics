import React from "react";

export default function Post(props){
  const { post } = props;
  return(
    <React.Fragment>
      <article>
        <strong>{(post?.title) != null ? (post?.title) : "News' Title"}</strong><br/>
        <small>{(post?.subtitle) ?? "News' Subtitle"}</small>
      </article>
      <br/>
    </React.Fragment>
  );
}
