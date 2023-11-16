import React from "react";
import PropTypes from "prop-types";

import PostHeader from "./PostHeader";
export default function Post(props){
  return(
    <React.Fragment>
      <article>
        <PostHeader
          post={{
            title: props.post.title,
            read: props.post.read,
            id: props.post.id
          }}
          onRemove={props.onRemove}
        />
        <br/>
        <small>{(props?.post.subtitle) ?? "News' Subtitle"}</small>
        <br/>
        Likes: {props.post.likes ?? 0}
      </article>
      <br/>
    </React.Fragment>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}
