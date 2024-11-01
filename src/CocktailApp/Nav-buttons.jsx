import { Card, Row, Col, Button } from 'react-bootstrap';
import React from "react";
import bootstrap from 'bootstrap';
import {onSeemoreClick} from './Card.jsx';

const NavButtons = (props) => {

const {seemoreActive, setSeemoreActive} = props;
  return (
		<div
			className='btn-group nav-buttons w-100'
			role='group'
		>
			<button
				className='btn btn-info'
				id='btnPrev'
				onClick={onSeemoreClick}
			>
				Precedente
			</button>
			<button
				className='btn btn-info'
				id='btnNext'
				
			>
				Successivo
			</button>
		</div>
	);
}

export default NavButtons;