var addBtn = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function addDelBtnToExistingList(){
	var li = document.querySelectorAll("li");
	for(var i=0; i<li.length; i++){
		var button = document.createElement("button");
		button.appendChild(document.createTextNode("X"));
		var space = document.createElement("p");
		space.appendChild(document.createTextNode(" "));
		space.style.display = "inline";
		li[i].appendChild(space);
		li[i].appendChild(button);
	}
}

function inputLength() {
	return input.value.length;
}

function entryValidation() {
	if(inputLength() > 0 && input.value.trim().length > 0 ) {
		createNewListItem();
	} else {
		alertEmptyField();
	}
}

function alertEmptyField(){
	alert("Field cannot be empty. Please enter an item.");
	input.value = "";
	return;
}

function createNewListItem() {
	var li = document.createElement("li");
	var btn = document.createElement("button");

	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	
	btn.appendChild(document.createTextNode("X"));
	li.appendChild(btn);

	input.value = "";
}

function toggleDone(e) {
	if(e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

function addListAfterClick() {
	entryValidation();
}

function addListAfterEnter(event) {
	if (event.key === 'Enter') {
		entryValidation();
	}
}

function delListItem(ev) {
	if (ev.target.tagName === "BUTTON") {
		ev.target.parentNode.remove();
		return;
	}
}

addBtn.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

ul.addEventListener("click", toggleDone);
ul.addEventListener("click", delListItem);

addDelBtnToExistingList();