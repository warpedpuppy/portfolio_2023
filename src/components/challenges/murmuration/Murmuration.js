import './Murmuration.scss';
import ChallengesCanvas from './ChallengesCanvas';
import SetUpMurmuration from './code/index';
import BackButton from '../../BackButton';
function Murmuration() {
	return ( <>
	<BackButton />
	murmuration
	<ChallengesCanvas startClass={SetUpMurmuration} />
	</> );
}

export default Murmuration;