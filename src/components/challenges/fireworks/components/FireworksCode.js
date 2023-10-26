import TabLayout from '../../../../layout-templates/tabs/TabLayout';
function FireworksCode() {
	return ( 
		<TabLayout 
		tabs={['step one', 'step two', 'step three', 'step four']} 
		contentArray={[
		
			<a href={`https://github.com/warpedpuppy/portfolio_2023/blob/main/src/components/challenges/fireworks/code/StepOne.js` } target="_blank" rel="noreferrer">link to code</a>,
			<a href={`https://github.com/warpedpuppy/portfolio_2023/blob/main/src/components/challenges/fireworks/code/StepTwo.js` } target="_blank" rel="noreferrer">link to code</a>,
			<a href={`https://github.com/warpedpuppy/portfolio_2023/blob/main/src/components/challenges/fireworks/code/StepThree.js` } target="_blank" rel="noreferrer">link to code</a>,
			<a href={`https://github.com/warpedpuppy/portfolio_2023/blob/main/src/components/challenges/fireworks/code/StepFour.js` } target="_blank" rel="noreferrer">link to code</a>]}/>
	 );
}

export default FireworksCode;