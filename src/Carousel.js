import React from 'react'
import { Link } from 'react-router-dom';
import './Carousel.css';
function Carosel(props) {
  return (
    <div id='carousel' >
    
    <h2 >{props.name}</h2>
    <button>Learn more <i class="fa-solid fa-circle-info"></i></button>
    
    <div >
    <img id="img" src={props.url}/>
    </div>
    </div>
  )
}

export default Carosel
