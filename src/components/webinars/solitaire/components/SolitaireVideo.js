import './SolitaireVideo.scss';

function SolitaireVideo() {
	return (
		<div className="video-iframe-shell">
		<iframe
		// width="560"
		// height="315"
		src="https://www.youtube.com/embed/hasFnKRrT0Y?si=auXbr0g6Z3_FbMVh"
		title="YouTube video player"
		frameBorder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowFullScreen={true}
	  ></iframe>
	  </div> 
	 );
}

export default SolitaireVideo;