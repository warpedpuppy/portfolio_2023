import { useEffect, useRef } from "react";
import HomeAnimation from "./HomeAnimation";

function HomeCanvas() {
  const containerRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    gameRef.current = new HomeAnimation(containerRef.current);
    return () => gameRef.current && gameRef.current.stop();
  }, []);

  return <div className="home-canvas" ref={containerRef} />;
}

export default HomeCanvas;
