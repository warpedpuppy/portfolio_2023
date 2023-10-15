import './SVGAnimations.scss';
import TabLayout from '../../../layout-templates/tabs/TabLayout';
import SVGVideo from './components/SVGVideo';
import SVGContent from './components/SVGContent';
function SVGAnimations() {
	return ( 
	<div className='general-layout'>
		<h1>Animating SVGs</h1>
		<TabLayout 
		tabs={['video', 'concept', 'handout']}
		content={<SVGVideo />}
		concept={<SVGContent />}
		/>

	</div> 
	);
}

export default SVGAnimations;