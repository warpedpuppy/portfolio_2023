
export default function SudokuQuadrantChecker(strArr) {
	
	let nodes = [];
	let built = false;

	if (!built) buildGrid(); 

	function processChange (e) {
		let start = Date.now();
		let counter = 0;
		let target;
		let filteredNodes = nodes.filter( item => {
			counter ++;
			if(item.node === e.target){ target = item };
			return item.value !== '' || item.node === e.target;
			
		});
	
		let re = new RegExp(/[0-9]/, "g");
		let isNum = re.test(e.key);
		target.node.value = '';
		target.value = target.node.value = isNum ? e.key : '';
	
		counter = clear(counter); 
		
		let highlights = []
		for (let i = 0; i < filteredNodes.length; i++) {
			let n = filteredNodes[i];
			for (let j = 0; j < filteredNodes.length; j++) {
				let n2 = filteredNodes[j];
				counter ++;
				if (n.value && n2.value && i !== j && n2.value === n.value) {
					if (n.col === n2.col) {
						n.node.classList.add('red')
						highlights.push({col: n.col})
					}
					if (n.row === n2.row) {
						n.node.classList.add('red')
						highlights.push({row: n.row})
					}
					if (n.ninth === n2.ninth) {
						n.node.classList.add('red')
						highlights.push({ninth: n.ninth})
					}
				}
			}
		}
		let end = Date.now();
		let time = end - start;
		document.querySelector('#looping-data').innerHTML = `The counter ran ${counter} times and took ${time} milliseconds.`;
		highlight(highlights)
	}
	function clear(counter) {
		nodes.forEach( (n, j) => {
			n.node.classList.remove('red')
			n.node.classList.remove('highlight');
			counter ++;
		})
		return counter;
	}	
	function testIfFull(e){
		e.target.value = '';
	}
	function buildGrid() {
		let grid = document.querySelector('#soduko-grid');
		grid.innerHTML = "";
		grid.classList.add('soduko-grid');

		for (let row = 0; row < 9; row++) {
			for (let col = 0; col < 9; col++) {
				const node = document.createElement('input')
				node.type = 'number';
				node.addEventListener('keypress', testIfFull)
				node.addEventListener('keyup', processChange)
				node.value = '';
				grid.appendChild(node);
	
				let obj = {col, row, ninth: determineNinth(row, col), value:'', node};
				nodes.push(obj);
			}
		}
		built = true;
	}
	function highlight(arr) {
		let props = ['row', 'col', 'ninth'];
		arr.forEach( obj => {
			props.forEach( item => {
					for (let i = 0; i < nodes.length; i ++) {
						let n = nodes[i];
						if (n[item] === obj[item]) n.node.classList.add('highlight');
					}
			})
		})
	}
	function determineNinth(row, col) {
		if (row < 3) {
			if (col < 3) {
				return 0;
			} else if (col >= 3 && col < 6) {
				return 1;
			} else if (col >= 6) {
				return 2;
			}
		}  else if (row >= 3 && row < 6) {
			if (col < 3) {
				return 3;
			} else if (col >=3 && col < 6) {
				return 4;
			} else if (col >= 6) {
				return 5;
			}
		} else if (row >= 6) {
			if (col < 3) {
				return 6;
			} else if (col >=3 && col < 6) {
				return 7;
			} else if (col >= 6) {
				return 8;
			}
		}
	}
}


