import React from "react";
import PropTypes from "prop-types";

export default function Header(props){
  return(
    <React.Fragment>
      <h1>{props.title}</h1>
      {props.children}
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

Header.defaultProps = {
  title: `Igor's JStack Blog`
}
