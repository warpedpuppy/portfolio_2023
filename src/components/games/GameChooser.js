export default function GameChooser (str) {
	switch(str) {
		case "pig":
		  return require('./bouncePig/code/BouncePigCode');
		case "dragon":
		  return require('./dragon/code/DragonCode')
		case "lines":
		return require('./lines/code/LinesCode')
		default:
		  return './bouncePig/code/BouncePigCode';
	  }
}