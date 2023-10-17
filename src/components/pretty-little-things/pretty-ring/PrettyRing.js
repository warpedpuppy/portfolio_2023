import TabLayout from '../../../layout-templates/tabs/TabLayout';
import PrettyRingCanvas from './components/PrettyRingCanvas';

function PrettyRing () {
    return (
		<div className='general-layout'>
		<h1>pretty ring</h1>
		<TabLayout content={<PrettyRingCanvas />} />	
		</div>
		);
}
export default PrettyRing;
