let question = [
	{
		id: 1,
		questionText: "What does HTML stand for?",
		options: [
			"Hyper Trainer Marking Language",
			"Hyper Text Markup Language",
			"High Text Machine Language",
			"Hyper Tool Multi Language",
		],
		correctAnswer: "Hyper Text Markup Language",
	},
	{
		id: 2,
		questionText: "What does CSS stand for?",
		options: [
			"Creative Style Sheets",
			"Cascading Style Sheets",
			"Computer Style Sheets",
			"Colorful Style Sheets",
		],
		correctAnswer: "Cascading Style Sheets",
	},
	{
		id: 3,
		questionText: "Which language is mainly used for web page interactivity?",
		options: ["HTML", "CSS", "JavaScript", "SQL"],
		correctAnswer: "JavaScript",
	},
	{
		id: 4,
		questionText: "What does API stand for?",
		options: [
			"Application Programming Interface",
			"Applied Program Internet",
			"Advanced Programming Interface",
			"Application Process Integration",
		],
		correctAnswer: "Application Programming Interface",
	},
	{
		id: 5,
		questionText:
			"Which data format is commonly used to exchange data between client and server?",
		options: ["XML", "JSON", "CSV", "TXT"],
		correctAnswer: "JSON",
	},
	{
		id: 6,
		questionText: "What does HTTP stand for?",
		options: [
			"Hyper Text Transfer Protocol",
			"High Transfer Text Protocol",
			"Hyper Tool Transfer Program",
			"Hyper Text Translation Process",
		],
		correctAnswer: "Hyper Text Transfer Protocol",
	},
	{
		id: 7,
		questionText: "Which symbol is used for comments in JavaScript?",
		options: ["//", "##", "<!-- -->", "**"],
		correctAnswer: "//",
	},
	{
		id: 8,
		questionText: "Which company developed JavaScript?",
		options: ["Microsoft", "Sun Microsystems", "Netscape", "Google"],
		correctAnswer: "Netscape",
	},
	{
		id: 9,
		questionText: "Which keyword is used to declare a constant in JavaScript?",
		options: ["var", "let", "const", "static"],
		correctAnswer: "const",
	},
	{
		id: 10,
		questionText: "Which HTTP method is used to retrieve data from a server?",
		options: ["POST", "PUT", "GET", "DELETE"],
		correctAnswer: "GET",
	},
];

let currentQuestion = 0;

const questionTitle = document.getElementById("title");
const questionOption = document.getElementById("option");
const nextBtn = document.getElementById("nextBtn");
const bactBtn = document.getElementById("backNext");
let questionNum = document.getElementById("questionNum");

function disableNext(isDisbaled) {
	nextBtn.disabled = isDisbaled;
}
function disableBack(isDisbaled) {
	bactBtn.disabled = isDisbaled;
}

function loadQuestion() {
	questionOption.innerHTML = "";
	const q = question[currentQuestion];
	questionTitle.innerHTML = q.questionText;

	q.options.forEach((value) => {
		const button = document.createElement("button");
		button.innerText = value;
		button.onclick = () => {
			if (value == q.correctAnswer) {
				console.log("true");
				next();
			} else console.log("false");
		};

		questionOption.appendChild(button);
		//console.log(button);
	});

	pageNum();
	navGation();
}

function navGation() {
	if (currentQuestion === question.length - 1) {
		disableNext(true);
	} else {
		disableNext(false);
	}

	if (currentQuestion === 0) {
		disableBack(true);
	} else {
		disableBack(false);
	}
}

function pageNum() {
	questionNum.innerHTML = currentQuestion + 1;
}

loadQuestion();

function back() {
	if (currentQuestion === 0) return;
	currentQuestion--;
	loadQuestion();
}
function next() {
	if (currentQuestion === question.length - 1) return;
	currentQuestion++;
	loadQuestion();
}
