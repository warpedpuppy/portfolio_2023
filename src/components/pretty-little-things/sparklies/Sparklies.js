import TabLayout from '../../../layout-templates/tabs/TabLayout';
import SparkliesCanvas from './components/SparkliesCanvas';

function Sparklies () {
    return (
		<div className='general-layout'>
		<h1>sparklies</h1>
		<TabLayout content={<SparkliesCanvas />} />	
		</div>
		);
}
export default Sparklies;
