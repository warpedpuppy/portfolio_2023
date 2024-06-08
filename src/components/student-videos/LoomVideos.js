function LoomVideos({link}) {
	return (
	  <div className="video-iframe-shell">
		<div
		  style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}
		>
		  <iframe
			src={link}
			title="aws set up"
			frameborder="0"
			webkitallowfullscreen
			mozallowfullscreen
			allowfullscreen
			style={{
			  position: "absolute",
			  top: "0",
			  left: "0",
			  width: "100%",
			  height: "100%",
			}}
		  ></iframe>
		</div>
	  </div>
	);
  }
  
  export default LoomVideos;
  