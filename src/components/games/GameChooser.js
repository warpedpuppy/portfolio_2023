export default function GameChooser (str) {
	switch(str) {
		case "pig":
		  return require('./bouncePig/code/BouncePigCode');
		case "dragon":
		  return require('./dragon/code/DragonCode')
		default:
		  return './bouncePig/code/BouncePigCode';
	  }
}