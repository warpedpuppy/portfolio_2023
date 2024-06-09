export default function GameChooser (str) {
	switch(str) {
		case "pig":
		  return require('./bouncePig/code/BouncePigCode');
		case "dragon":
		  return require('./dragon/code/DragonCode');
		case "lines":
			return require('./lines/code/LinesCode');
		case "fish":
			return require('./fish/supportingClasses/swimAnimation');
		case "planet-jump":
			return require('./planetJump/code/PlanetJumpCode');
		case "fireworks1":
			return require('../pretty-little-things/fireworks/code/StepOne');
		default:
		  return './bouncePig/code/BouncePigCode';
	  }
}