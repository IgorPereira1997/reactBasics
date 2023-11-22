import React from "react";
import PropTypes from "prop-types";

import PostHeader from "./PostHeader";

import { Container, Subtitle, Likes } from "./styles";

export default function Post(props){
  return(
    <React.Fragment>
      <Container $removed={props.post.removed}>
        <PostHeader
          post={{
            title: props.post.title,
            read: props.post.read,
            id: props.post.id
          }}
          onRemove={props.onRemove}
        />
        <Subtitle>{(props?.post.subtitle) ?? "News' Subtitle"}</Subtitle>
        <Likes>Likes: {props.post.likes ?? 0}</Likes>
      </Container>
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
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired
}
