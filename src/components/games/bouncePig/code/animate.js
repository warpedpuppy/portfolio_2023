import * as PIXI from 'pixijs';
export default function Animate(gv) {
  const clouds = gv.clouds.clouds;
  let dot1 = gv.bouncePlatform.dot1,
      dot2 = gv.bouncePlatform.dot2,
	  line = gv.bouncePlatform.line,
	  C = new PIXI.Point(gv.halfWidth, gv.halfHeight),
	  A, B;

  return {
	resize: function (halfWidth, halfHeight) {
		C = new PIXI.Point(halfWidth, halfHeight);
	},
    tick: function() {
      if (gv.animateAllow === true) {
        gv.bouncePlatform.tickIt();
      
        if (gv.mouseDown !== true) {
          dot1.y -= gv.vy;
          dot2.y -= gv.vy;
          line.y -= gv.vy;
          dot1.x -= gv.vx;
          dot2.x -= gv.vx;
          line.x -= gv.vx;
          
        }

        for (let i = 0; i < gv.loopingQ; i++) {
         
          if (clouds[i] && gv.clouds.onStage === true) {
            let cloud = clouds[i];

            cloud.y -= gv.vy;
            cloud.x -= gv.vx;

            if (cloud.y < -cloud.h) cloud.y = gv.canvasHeight;
            if (cloud.y > gv.canvasHeight) cloud.y = -cloud.h;
            if (cloud.x > gv.canvasWidth + cloud.w) cloud.x = -cloud.w;
            if (cloud.x < -cloud.w) cloud.x = gv.canvasWidth + cloud.w;
           
          }

        }

        if (gv.vy < gv.speedLimit) {
          gv.vy += 0.25;
        }


        // BOUNCING PLATFORM COLLISION DETECTION
        A = new PIXI.Point(dot1.x, dot1.y);
        B = new PIXI.Point(dot2.x, dot2.y);

        if (
          gv.mouseDown !== true &&
          gv.utils.lineIntersectCircle(A, B, C, 20)
        ) {
          if (
            (dot1.x > dot2.x && dot1.y < dot2.y) ||
            (dot1.y > dot2.y && dot1.x < dot2.x)
          ) {
            gv.vx = -2;
            gv.hero.cont.scale.x = 1;
          } else if (
            (dot1.x > dot2.x && dot1.y > dot2.y) ||
            (dot1.y < dot2.y && dot1.x < dot2.x)
          ) {
            gv.vx = 2;
            gv.hero.cont.scale.x = -1;
          }

          gv.vy *= -1.5;
          gv.speedLimit = gv.storeSpeedLimit;
        }

        if (dot1.y < 0 && dot2.y < 0) {
          gv.swipeText.visible = true;
        }
      }
    },
  };
}
