var newItemCounter = 1;
var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

ourList.addEventListener("click", activateItem);

function activateItem(e) {
	if (e.target.nodeName == "LI") {
		ourHeadline.innerHTML = e.target.innerHTML; // this is for change heading
		for (i = 0; i < e.target.parentNode.children.length; i++) { // this is for remove active class on li in auto add li element
			listItems[i].classList.remove("active");
		}
		e.target.classList.add("active"); 
	}
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
<<<<<<< HEAD:JS program 1/main.js
	ourList.innerHTML += "<li> New Tab " + newItemCounter + "</li>";
=======
	ourList.innerHTML += "<li>New text name " + newItemCounter + "</li>";
>>>>>>> e910c1970317d6e1dec32e749480a0807f51a47f:main.js
	newItemCounter++
}