import { useEffect, useRef } from 'react';
import HomeAnimation from './HomeAnimation';

function HomeCanvas() {

  const canvasContainer = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    gameRef.current = new HomeAnimation(canvasContainer.current);
  }, [canvasContainer])

  useEffect(() => () => gameRef.current.stop(), []);

  return <canvas ref={canvasContainer} />


}

export default HomeCanvas;