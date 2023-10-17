import TabLayout from '../../../layout-templates/tabs/TabLayout';
import GlitterCanvas from './components/GlitterCanvas';

function Glitter () {
    return (
		<div className='general-layout'>
		<h1>glitter</h1>
		<TabLayout content={<GlitterCanvas />} />	
		</div>
		);
}
export default Glitter;
