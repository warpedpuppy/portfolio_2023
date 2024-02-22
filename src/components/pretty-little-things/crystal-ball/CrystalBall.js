
import CrystalBallCanvas from './components/CrystalBallCanvas';
import GeneralLayout from '../../../layout-templates/GeneralLayout';
function CrystalBall () {
    return (
		<GeneralLayout
		title="crystal ball"
		subtitle="made for photography school in maine"
		component={<CrystalBallCanvas />} />	
		);
}
export default CrystalBall;
