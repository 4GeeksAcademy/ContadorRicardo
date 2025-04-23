import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

import '../icons.js';

// components
function SimpleCounter(props){
  return (<div className="big counter">
    <div className="calendar"><i className="fa-duotone fa-thin fa-clock"></i></div>
    <div className="four">{props.digitFour}</div>
    <div className="three">{props.digitThree}</div>
    <div className="two">{props.digitTwo}</div>
    <div className="one">{props.digitOne}</div>
  </div>);
}

let counter = 0;
setInterval(function){
  const four = Math.floor(counter/10000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter /100);
  const one = Math.floor(counter/10);
  console.log(four, three, two, one);
ReactDOM.render(
  <SimpleCounter digitOne={counter.indexOf()}    />
  document.querySelector('#app')
);
},(1000);