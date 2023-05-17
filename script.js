function addTask() {
	if(document.getElementById("input-task").value != "") {
		const task = document.getElementById("input-task").value;
		const task_list = document.getElementById("task-list");
		const li = document.createElement("li");
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		li.appendChild(checkbox);
		li.appendChild(document.createTextNode(task));
		task_list.appendChild(li);
	} else {
		const bubble = document.getElementById('myBubble');
		bubble.style.display = 'block';

		setTimeout(function() {
	    bubble.style.display = 'none';
	  }, 1600);
	}
}

function removeAllTasks() {
	const task_list = document.getElementById("task-list");
	task_list.innerHTML = "";
}

function removeCompletedTasks() {
	const task_list = document.getElementById("task-list");
	const list_items = task_list.getElementsByTagName("li");
	
	console.log(list_items);

	for(let i = 0; i < list_items.length; i++) {
		const checkbox = list_items[i].getElementsByTagName("input")[0];

		if(checkbox.checked) {
			task_list.removeChild(list_items[i]);
			i--;
		}
	}
}