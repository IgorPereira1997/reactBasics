import React from "react";
import PropTypes from "prop-types";

export default function Post(props){
  const { post } = props;
  return(
    <React.Fragment>
      <article>
        <strong>{(post?.title) != null ? (post?.title) : "News' Title"}</strong><br/>
        <small>{(post?.subtitle) ?? "News' Subtitle"}</small>
        <br/>
        Likes: {props.likes ?? 0}
      </article>
      <br/>
    </React.Fragment>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired
}
