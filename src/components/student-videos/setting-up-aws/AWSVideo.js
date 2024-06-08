function SolitaireVideo() {
  return (
    <div className="video-iframe-shell">
      <div
        style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}
      >
        <iframe
          src="https://www.loom.com/embed/25746965ed3d407d824b5381043ff68a?sid=ae94fa04-f965-4d83-b347-27603eed1cf4"
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
      {/* <iframe
		// width="560"
		// height="315"
		src="https://www.loom.com/share/25746965ed3d407d824b5381043ff68a?sid=7a166587-ac4e-4d1f-8c63-b0e83da98ecd"
		title="YouTube video player"
		frameBorder="0"
		allow="accelerometer, autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowFullScreen={true}
	  ></iframe> */}
    </div>
  );
}

export default SolitaireVideo;
