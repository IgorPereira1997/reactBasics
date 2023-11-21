import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

import styles from './Header.css';

export default function Header(props){

  const { onToggleTheme } = useContext(ThemeContext);

  return(
    <React.Fragment>
      <h1 className={styles.title}>{props.title}</h1>
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
