import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import React from "react";
import img from './Slides/2x8thr1504816928.jpg';


export default (props) => {
	const bodyOffsetTop = 75;
	const bodyOffsetBottom = 70;
	const cardHeight = Math.min(document.documentElement.clientHeight, window.innerHeight)
		- bodyOffsetTop - bodyOffsetBottom;
	const cardStyle = {
		height: cardHeight + 'px',
	}
	const { src, title, text, category, info, glass} = props;
	const a = (item) => { 
	  const h = document.querySelector('.card').getBoundingClientRect().height;
	  console.log(h)
}
	return (
		<div className='card border-0' style = {cardStyle}
		onClick = { a }>
			<img
				src={src}
				className='card-img-right card-img'
				alt={title}
			/>
			<div className='card-body'>
				<h5 className='card-title'>
					<span className='term'>Name:</span> {title}
				</h5>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item ps-0'><span className='term'>Category:</span><span className='description'>{category}</span></li>
					<li className='list-group-item ps-0'><span className='term'>Info:</span><span className='description'>{info}</span></li>
					<li className='list-group-item ps-0'><span className='term'>Glass:</span><span className='description'>{glass}</span></li>
				</ul>
			</div>
		</div>
	);
}

/* quando si clicca si see more cambiare style img e list 
creare una lista*/