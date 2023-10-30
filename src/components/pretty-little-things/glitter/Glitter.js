
import GlitterCanvas from './components/GlitterCanvas';
import GeneralLayout from '../../../layout-templates/GeneralLayout';
function Glitter () {
    return (
		<GeneralLayout
		title="glitter"
		subtitle=""
		component={<GlitterCanvas />} />	
		);
}
export default Glitter;
