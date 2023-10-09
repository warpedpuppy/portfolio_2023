import './Murmuration.scss';
import MurmurationCanvas from './MurmurationCanvas';
import SetUpMurmuration from './code/index';
import BackButton from '../../BackButton';
function Murmuration() {
	return ( <>
	<BackButton />
	murmuration
	<MurmurationCanvas startClass={SetUpMurmuration} />
	</> );
}

export default Murmuration;