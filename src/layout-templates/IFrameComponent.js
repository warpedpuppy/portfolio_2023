import { useState } from 'react';
import './IFrameComponent.scss';

function IFrameComponent({src, title}) {
	const [loaded, setLoaded] = useState(false)
	const onLoadHandler = e => {
		setLoaded(true)
	}
	return ( 
		<div className='iframe-wrapper'>
			<h3 className='loading'>Loading</h3>
			<iframe className={ loaded ? 'loaded' : ''} onLoad={onLoadHandler} title={title} src={src}></iframe>
		</div>
		
	 );
}

export default IFrameComponent;