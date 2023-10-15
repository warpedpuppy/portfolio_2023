import './SVGAnimations.scss';
import TabLayout from '../../../layout-templates/tabs/TabLayout';
import SVGVideo from './components/SVGVideo';
function SVGAnimations() {
	return ( 
	<div className='general-layout'>
		<h1>Animating SVGs</h1>
		<TabLayout 
		tabs={['video', 'concept']}
		content={<SVGVideo />}
		/>

	</div> 
	);
}

export default SVGAnimations;