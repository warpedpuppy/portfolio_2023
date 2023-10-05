import './Fireworks.scss';
import ChallengesCanvas from './ChallengesCanvas';
import StepOneFunction from './code/StepOne';
import StepTwoFunction from './code/StepTwo';
import StepThreeFunction from './code/StepThree';
import StepFourFunction from './code/StepFour';
import BackButton from '../../BackButton';
function Fireworks() {
	return ( 
	<>
	<BackButton />
	<h3>step one</h3>
	<ChallengesCanvas startFunction={StepOneFunction} />
	 <h3>step two</h3>
	<ChallengesCanvas startFunction={StepTwoFunction} />
	<h3>step three</h3>
	<ChallengesCanvas startFunction={StepThreeFunction} />
	<h3>step four</h3>
	<ChallengesCanvas startFunction={  StepFourFunction } />
	</> );
}

export default Fireworks;