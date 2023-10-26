
import SparkliesCanvas from './components/SparkliesCanvas';
import GeneralLayout from '../../../layout-templates/GeneralLayout';
function Sparklies () {
		return (<GeneralLayout 
		title="sparklies"
		component={<SparkliesCanvas />} />	
		);
}
export default Sparklies;
