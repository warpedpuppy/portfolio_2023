import "../Fireworks.scss";
import FireworksCanvas from "../FireworksCanvas";
import StepOneFireworks from "../code/StepOne";
import StepTwoFireworks from "../code/StepTwo";
import StepThreeFireworks from "../code/StepThree";
import StepFourFireworks from "../code/StepFour";

function FireworksContent() {
  return (
 
	<div className="content-container">
      <h3>step one</h3>
	  <a href={`https://github.com/warpedpuppy/portfolio_2023/blob/main/src/components/challenges/fireworks/code/StepOne.js` } target="_blank" rel="noreferrer">link to code</a>
      <FireworksCanvas mainClass={StepOneFireworks} />
      <h3>step two</h3>
	  <a href={`https://github.com/warpedpuppy/portfolio_2023/blob/main/src/components/challenges/fireworks/code/StepTwo.js` } target="_blank" rel="noreferrer">link to code</a>
      <FireworksCanvas mainClass={StepTwoFireworks} />
      <h3>step three</h3>
	  <a href={`https://github.com/warpedpuppy/portfolio_2023/blob/main/src/components/challenges/fireworks/code/StepThree.js` } target="_blank" rel="noreferrer">link to code</a>
      <FireworksCanvas mainClass={StepThreeFireworks} />
      <h3>step four</h3>
	  <a href={`https://github.com/warpedpuppy/portfolio_2023/blob/main/src/components/challenges/fireworks/code/StepFour.js` } target="_blank" rel="noreferrer">link to code</a>
      <FireworksCanvas mainClass={StepFourFireworks} />
	  </div> 
  );
}

export default FireworksContent;
