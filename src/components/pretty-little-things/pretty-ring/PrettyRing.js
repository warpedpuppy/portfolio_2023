import TabLayout from '../../../layout-templates/tabs/TabLayout';
import PrettyRingCanvas from './components/PrettyRingCanvas';

function PrettyRing () {
    return <TabLayout content={<PrettyRingCanvas />} />;
}
export default PrettyRing;
