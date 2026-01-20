let inputs = document.querySelectorAll("input");
let cardSection = document.querySelector("#cardSection");
let btnClick = document.querySelector(".btn");

document.addEventListener("submit", function (docFile) {
	docFile.preventDefault();
	console.log(inputs[0].value);
	console.log(inputs);

	let card = document.createElement("div");
	card.classList.add("card");

	let imageBlock = document.createElement("div");
	imageBlock.classList.add("imageSection");

	let img = document.createElement("img");
	img.setAttribute("src", inputs[0].value);

	let eh3 = document.createElement("h3");
	eh3.textContent = inputs[1].value;
	let eh6 = document.createElement("h6");
	eh6.textContent = inputs[2].value;
	let ep = document.createElement("p");
	ep.textContent = inputs[3].value;

	cardSection.appendChild(card);
	card.appendChild(imageBlock);
	imageBlock.appendChild(img);

	card.appendChild(eh3);
	card.appendChild(eh6);
	card.appendChild(ep);

	inputs.forEach(function (inp) {
		if (inp.type != "submit") {
			inp.value = "";
		}
	});
});
