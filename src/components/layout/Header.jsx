import React from 'react';
import { Link } from 'react-router-dom';
import style from '../style';


function Header() {
  return (
    <header style={style.headerStyle}>
      <h1>TodoList</h1>
      <Link style={style.linkStyle} to="/">Home</Link> | <Link style={style.linkStyle} to="/about">About</Link>
    </header>
  )
}

export default Header;