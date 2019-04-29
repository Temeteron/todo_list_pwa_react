import React from 'react';
import style from '../style';

function About() {
  return (
    <React.Fragment>
      <h1 style={style.textWhiteCenter}>About</h1>
      <p style={style.textWhiteCenter}>
				<i>A pwa to-do list developed in React. All of your data will be stored locally.</i>
      </p>
      <p style={style.textWhiteCenter}>
      	<a href="http://dimitris.greasidis.com/" target="_blank" style={{color: '#0EDAE4'}}>Dgreasidis</a>
      </p>
    </React.Fragment>
  )
}


export default About;