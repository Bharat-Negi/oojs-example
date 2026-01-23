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

// counter
let count = 10;
let timeHai = setInterval(function () {
	if (count >= 1) {
		console.log(count);
		count--;
	} else {
		clearInterval(timeHai);
		console.log(count);
	}
}, 1000);

// this key word as per location
console.log(this);
function Hello() {
	console.log(this);
}
Hello();

let obj4 = {
	name: "bharat",
	age: 26,
	mathArea: function () {
		console.log(this);
	},
};
obj4.mathArea();

// fat arrow function this key word become window scope
let obj5 = {
	name: "bharat",
	age: 26,
	mathArea: () => {
		console.log(this);
	},
};
obj5.mathArea();

// inside the function use only fat arrow function to remain this key word value
let obj6 = {
	name: "bharat",
	age: 26,
	mathArea: function () {
		let negi = () => {
			console.log(this);
		};
		negi();
	},
};
obj6.mathArea();

// event handler for this key word
document.querySelector("h2").addEventListener("click", function () {
	console.log(this);
});
