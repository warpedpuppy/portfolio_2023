
// import './BouncePig.scss';
// import BouncePigCode from './code/BouncePigCode';
// import { useEffect, useRef } from 'react';
// import BackButton from '../../BackButton';
// function BouncePig() {

// 	const canvasContainer = useRef(null);
// 	const game = useRef(null);
// 	useEffect( () => {
// 		game.current = BouncePigCode(canvasContainer.current);
// 		game.current.start();
// 	}, [canvasContainer])

// 	useEffect( () => () => game.current.stop(), [] );
// 	return ( 
// 		<>
// 		    <BackButton />
// 			<div className="game-canvases" ref={canvasContainer}></div>
// 		</>
// 	 );
// }

// export default BouncePig;