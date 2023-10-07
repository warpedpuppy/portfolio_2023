(function(){
	"use strict"
	window.addEventListener("load", setupAnimation, false);
	let gl, rects = [], boxWidth = 20;

	function setupAnimation (evt) {
	  window.removeEventListener(evt.type, setupAnimation, false);
	  if (!(gl = getRenderingContext())) return;
	  gl.enable(gl.SCISSOR_TEST);
	  drawAnimation();
	}
	
	function drawAnimation () {

		let colQ = gl.drawingBufferWidth / boxWidth;
		for (let i = 0; i < colQ; i++) {
			for (let j = 0; j < 10; j ++ ) {
				let rectangle = new Rectangle();
				rectangle.position[1] = convertY(20 * j);
				rectangle.position[0] = 20 * i;
				gl.scissor(rectangle.position[0], rectangle.position[1], rectangle.size[0] , rectangle.size[1]);
				gl.clear(gl.COLOR_BUFFER_BIT);
				rects.push(rectangle);
			}
			
		}
		// loop()
	}

	function convertY(pos) {
		return gl.drawingBufferHeight - (pos + 20);
	}

	function loop(){
		
		requestAnimationFrame(loop);
	}
	
	function playerClick (evt) {
	  // We need to transform the position of the click event from
	  // window coordinates to relative position inside the canvas.
	  // In addition we need to remember that  vertical position in
	  // WebGL increases from bottom to top, unlike in the browser
	  // window.
	  var position = [
		  evt.pageX - evt.target.offsetLeft,
		  gl.drawingBufferHeight - (evt.pageY - evt.target.offsetTop),
		];
	  // if the click falls inside the rectangle, we caught it.
	  // Increment score and create a new rectangle.
	  var diffPos = [ position[0] - rainingRect.position[0],
		  position[1] - rainingRect.position[1] ];
	  if ( diffPos[0] >= 0 && diffPos[0] < rainingRect.size[0]
		  && diffPos[1] >= 0 && diffPos[1] < rainingRect.size[1] ) {
		score += 1;
		// scoreDisplay.innerHTML = score;
		rainingRect = new Rectangle();
	  }
	}
	
	function Rectangle () {
	  var rect = this;
	  rect.rotation = 40;
	  rect.size = [ 10, 10 ];
	  rect.position = [];
	  rect.color = getRandomVector();
	  gl.clearColor(rect.color[0], rect.color[1], rect.color[2], 1.0);
	  function getRandomVector() {
		return [Math.random(), Math.random(), Math.random()];
	  }
	}
	
	function getRenderingContext() {
	  var canvas = document.querySelector("canvas");
	  canvas.width = canvas.clientWidth;
	  canvas.height = canvas.clientHeight;
	  var gl = canvas.getContext("webgl") 
		|| canvas.getContext("experimental-webgl");
	  if (!gl) {
		var paragraph = document.querySelector("p");
		paragraph.innerHTML = "Failed to get WebGL context."
		  + "Your browser or device may not support WebGL.";
		return null;
	  }
	  gl.viewport(0, 0, 
		gl.drawingBufferWidth, gl.drawingBufferHeight);
	  gl.clearColor(0.0, 0.0, 0.0, 1.0);
	  gl.clear(gl.COLOR_BUFFER_BIT);
	  return gl;
	}
	})();