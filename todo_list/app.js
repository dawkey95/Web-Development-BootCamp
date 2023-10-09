let userInput = prompt('What would you like to do?');
const todoArray = ['Take dog for walk'];

while (userInput !== 'quit' && userInput !== 'q') {
	if (userInput === 'list') {
		console.log(` `);
		console.log('**************');
		for (let i = 0; i < todoArray.length; i++) {
			console.log(`${i}: ${todoArray[i]}`);
		}
		console.log('**************');
	} else if (userInput === 'add') {
		const newToDo = prompt('Please add a new todo!');
		todoArray.push(newToDo);
		console.log(`${newToDo} has been added to the list!`);
	} else if (userInput === 'delete') {
		const deleteIndex = prompt(
			'What would you the number of todo you would like to delete?'
		);
		const deletedToDo = todoArray.splice(deleteIndex, 1);
		console.log(
			`You deleted ${deletedToDo}. Here is what is left on your Todo List:`
		);
		console.log(` `);
		console.log(`**************`);
		for (let i = 0; i < todoArray.length; i++) {
			console.log(`${i}: ${todoArray[i]}`);
		}
		console.log('**************');
	}

	userInput = prompt('What would you like to do?');
}

alert('YOU QUIT THE APP!');
