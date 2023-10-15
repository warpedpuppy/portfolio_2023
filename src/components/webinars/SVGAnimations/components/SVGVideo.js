import './SVGVideo.scss';

function SVGVideo() {
	return (  
	<div className="video-iframe-shell"
	>
		<h3 className="loading">loading. . . . </h3>
	<iframe title="css-animation-presentation" src="https://www.loom.com/embed/6707ee1b570c4c28b2fbc954575ab73f?sid=9d3b9a7f-8432-4cee-85e8-be9d42212f1c" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true} >
	</iframe>
</div> );
}

export default SVGVideo;