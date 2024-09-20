import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import React from "react";
import img from './Slides/2x8thr1504816928.jpg';


export default (props) => {
	const { src, title, text } = props;

	return (
		<div className='card'>
			<img
				src={src}
				className='card-img-top card-img'
				alt={title}
			/>
			<div className='card-body'>
				<h5 className='card-title'>
					<span className='definition'>Name:</span> {title}
				</h5>
				<ul class='list-group list-group-flush'>
					<li class='list-group-item'>An item</li>
					<li class='list-group-item'>A second item</li>
					<li class='list-group-item'>A third item</li>
				</ul>
			</div>
		</div>
	);
}
