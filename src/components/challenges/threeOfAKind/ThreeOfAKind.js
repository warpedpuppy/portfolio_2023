import './ThreeOfAKind.scss';
import Game from './code/canvas/canvas';
import { useEffect, useRef } from 'react';

import TabLayout from '../../../layout-templates/tabs/TabLayout';
function ThreeOfAKind() {
	const canvasRef = useRef(null);
	const gameRef = useRef(null);
	useEffect(() => {
		gameRef.current = new Game(canvasRef.current);
	}, [gameRef])

	useEffect( () => () => gameRef.current.stop(), [] );

	return ( 
	<section className='general-challenges-layout three-of-a-kind'>
		<h1>three-of-a-kind checker</h1>
	<TabLayout content={
		<>
	<h2>challenge: create a three of a kind code</h2>
	<h3>click on two adjacent square to swap them.</h3>
	<canvas id='three-of-id-canvas' ref={canvasRef} width="800" height="400"></canvas>
		<div className="controls">
			<label>rows: </label><select id="rows"></select>
			<label>cols: </label><select id="cols"></select>
		</div>
		</>
	} />
	</section> );
}

export default ThreeOfAKind;