import './Fireworks.scss';
import Canvas from '../../Canvas';
import StepOneFunction from './code/StepOne';
import StepTwoFunction from './code/StepTwo';
import StepThreeFunction from './code/StepThree';
import StepFourFunction from './code/StepFour';
function Fireworks() {
	return ( 
	<>
	<h3>step one</h3>
	<Canvas startFunction={StepOneFunction} />
	<h3>step two</h3>
	<Canvas startFunction={StepTwoFunction} />
	<h3>step three</h3>
	<Canvas startFunction={StepThreeFunction} />
	<h3>step four</h3>
	<Canvas startFunction={  StepFourFunction } />
	</> );
}

export default Fireworks;