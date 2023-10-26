import TabLayout from '../../../layout-templates/tabs/TabLayout';
import GlitterCanvas from './components/GlitterCanvas';

function Glitter () {
    return (
		<div className='general-layout'>
		<h1>glitter</h1>
		<TabLayout 
		backButtonBoolean={true}
		contentArray={[<GlitterCanvas />]} />	
		</div>
		);
}
export default Glitter;
