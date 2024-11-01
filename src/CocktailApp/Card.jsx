import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import React from "react";
import img from './Slides/2x8thr1504816928.jpg';

const toggleHideElements = (obj, cb) => {
  for (let item of obj) {
    item.classList.toggle('visually-hidden')
  }
}

 export const onSeemoreClick = (seemoreActive, setSeemoreActive) => {
  const cardImg = document.querySelector('.card-img');
  const items = document.querySelectorAll('.list-group-item')
  if(seemoreActive === true) {
    cardImg.classList.toggle('card-img--min')
    toggleHideElements(items)
  }
}

export default (props) => {
	const { src, title, text, category, info, glass} = props;
	const {seemoreActive, setSeemoreActive} = props;

	return (
		<div className='card border-5 flex-grow-1'>
			<img
				src={src}
				className='card-img-right card-img'
				alt={title}
			/>
			<div className='card-body position-relative'>
				<h5 className='card-title'>
					<span className='term'>Name:</span> {title}
				</h5>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item ps-0 d-flex  justify-content-between'>
					<div><span className='term'>Category:</span><span className='description'>{category}</span></div>
					</li>
					<li className='list-group-item ps-0 visually-hidden'><span className='term'>Info:</span><span className='description'>{info}</span></li>
					<li className='list-group-item ps-0 visually-hidden'>
					<span className='term'>Glass:</span><span className='description'>{glass}</span>
					</li>
					<p className =  "seemore" 
	           onClick= {onSeemoreClick}>
	        See more </p>
				</ul>
				
			</div>
		</div>
	);
}