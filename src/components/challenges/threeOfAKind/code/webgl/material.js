export default class Material {
	constructor(gl, xPos, yPos) {
		
		this.gl = gl;
		let vs = Material.produceVertexShaderCode(gl, xPos, yPos);
		const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
		const vertexShader = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vertexShader, vs);
		gl.compileShader(vertexShader);
		gl.shaderSource(fragmentShader,produceFragmentCode());
		gl.compileShader(fragmentShader);
		this.program = gl.createProgram();
		gl.attachShader(this.program, vertexShader);
		gl.attachShader(this.program, fragmentShader);
		gl.linkProgram(this.program);
		gl.detachShader(this.program, vertexShader);
		gl.detachShader(this.program, fragmentShader);
		gl.deleteShader(vertexShader);
		gl.deleteShader(fragmentShader);

	}

	static produceVertexShaderCode(gl, xPos, yPos) {

		const convertX = 2.0 * (xPos - gl.drawingBufferWidth / 2) / gl.drawingBufferWidth;
		const convertY = 2.0 * (yPos - gl.drawingBufferHeight / 2) / gl.drawingBufferHeight;
		return `
			#version 100
			precision highp float;
			attribute float position;
			void main() {
				gl_Position = vec4(${convertX},${convertY}, -0.5,  1.0);
				gl_PointSize = 10.0;
			}
		`
	  }

	render () {
		let gl = this.gl;
		gl.useProgram(this.program);
		gl.drawArrays(gl.POINTS, 0, 1);
	}
}
function produceFragmentCode () {
	return `
	#version 100
	precision mediump float;
	void main() {
		gl_FragColor = vec4(${Math.random()}, ${Math.random()}, ${Math.random()}, 1.0);
	}
	`;
}
