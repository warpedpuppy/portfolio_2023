export default function GameChooser (str) {
	switch(str) {
		case "pig":
		  return require('./bouncePig/code/BouncePigCode');
		case "dragon":
		  return require('./dragon/code/DragonCode');
		case "lines":
			return require('./lines/code/LinesCode');
		case "fish":
			return require('./fish/code/FishCode')
		default:
		  return './bouncePig/code/BouncePigCode';
	  }
}