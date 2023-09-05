
import './Solitaire.scss';
import Canvas from '../../Canvas';
import SolitaireGame from './code/SolitaireGame';
import { useEffect, useRef } from 'react';
function Solitaire() {
	const canvasRef = useRef(null);
	useEffect( () => {		
		const canvas = canvasRef.current;
		// let ctx = canvas.getContext('2d');
		SolitaireGame.init(canvas)
	})
	return ( 
		<div className="challenges-layout">
			<h1>Solitaire</h1>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/hasFnKRrT0Y?si=auXbr0g6Z3_FbMVh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
			<h2>the challenge is: code a javascript solitaire for the canvas element.</h2>
			<p><a href='https://www.youtube.com/watch?v=hasFnKRrT0Y' target='_blank' rel="noreferrer">link</a></p>
			<canvas width="1000" height="1000" ref={canvasRef} />
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