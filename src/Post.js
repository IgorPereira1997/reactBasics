import React from "react";
import PropTypes from "prop-types";

export default function Post(props){
  const { post } = props;
  return(
    <React.Fragment>
      <article>
        <strong>{(post?.title) != null ? (post?.title) : "News' Title"}</strong>
        <span>&nbsp;</span>
        <button onClick={() => props.onRemove(props.post.id)}>
          Remover
        </button>
        <br/>
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
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired
}
