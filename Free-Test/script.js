let inp = document.querySelector("input");
let p = document.querySelector("p");

function bharat(fa) {
	if (fa.data !== null) {
		p.innerText += fa.data;
	}
}
inp.addEventListener("input", bharat);

let obj = {
	name: "Bharat",
	age: 42,
	location: "Delhi",
};

for (let key in obj) {
	// console.log(key);
	console.log(key, "-", obj[key]);
}

// deep copy
let obj1 = {
	name: "Bharat Negi",
	age: 42,
	email: "bharat@gmail.com",
	address: {
		city: "Delhi",
	},
};

let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.address.city = "Panjab";

// use object.entries()
let course = {
	title: "JavaScript",
	duration: "4 Weeks",
};

Object.entries(course).forEach(function (val) {
	console.log(val[0] + ": " + val[1]);
});
