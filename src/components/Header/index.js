import React, { useContext } from "react";
import PropTypes from "prop-types";

import Title from '../Title';

import Button from "./../Button";
import { ThemeContext } from "./../../context/ThemeContext";


export default function Header(props){

  const { onToggleTheme } = useContext(ThemeContext);

  return(
    <React.Fragment>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
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
