
import './Solitaire.scss';
import Canvas from '../../Canvas';
import SolitaireGame from './code/SolitaireGame';
import { useEffect, useRef } from 'react';
function Solitaire() {
	const canvasRef = useRef(null);
	useEffect( () => {		
		const canvas = canvasRef.current;
		let ctx = canvas.getContext('2d');
		SolitaireGame.init(canvas)
	})
	return ( 
		<div className="challenges-layout">
			<h1>Solitaire</h1>
			<h2>the challenge is: code a javascript solitaire for the canvas element.</h2>
			<p><a href='https://www.youtube.com/watch?v=hasFnKRrT0Y' target='_blank' rel="noreferrer">link</a></p>
			<canvas width="600" height="300" ref={canvasRef} />
			<h2>step two</h2>
			<h2>step three</h2>
			<h2>step four</h2>
			<h2>step five</h2>
			<h2>step six</h2>
			<h2>step seven</h2>
			<h2>step eight</h2>

		</div>
	 );
}

export default Solitaire;