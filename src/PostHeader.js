import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function PostHeader(props){
  return(
    <React.Fragment>
      <strong>
          {(props.post.read &&
            <s>
              {(props?.post.title) != null ? (props?.post.title) : "News' Title"}
            </s>
          )}
          {(!props.post.read && (
              (props?.post.title) != null ? (props?.post.title) : "News' Title"
            )
          )}
          </strong>
        <span>&nbsp;</span>
        <Button onClick={props.onRemove} post={{id: props.post.id}}>
            Remover
        </Button>
    </React.Fragment>
  );
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}
