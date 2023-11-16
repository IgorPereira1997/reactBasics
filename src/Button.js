import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext";

export default function Button(props){

  console.log({ThemeContext});

  const { theme } = useContext(ThemeContext);

  return(
    <React.Fragment>
      <button
        onClick={props.onClick}
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
          background: theme === 'dark' ? '#000' : '#fff'
        }}
      >
        {props.children}
      </button>
    </React.Fragment>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
