const chatlog = document.getElementById("chatlog");
const textInput = document.getElementById("textInput");

let progressThroughPrompt = 0;
let currentPrompt = "";

function ReceiveMessage(message) {
	chatlog.innerHTML += "\n" + message;
}

function SendMessage() {
	console.log(textInput.value);
	ReceiveMessage("DADMAN: " + textInput.value);
	textInput.value = "";
}

function PromptUser(promptMessage) {
	currentPrompt = promptMessage;
	textInput.value = promptMessage
}

function SetUpEventListeners() {
	document.addEventListener('keydown', function(event) {
		if(event.key != "Backspace") {
			console.log(event.key);
			let previouslyEntered = textInput.value.substr(0, progressThroughPrompt) + event.key;
			progressThroughPrompt += 1;
			let remainingPrompt = currentPrompt.substr(progressThroughPrompt);
			textInput.value = previouslyEntered + remainingPrompt;
		}
	});
}

ReceiveMessage("SONSON: hey");
PromptUser("hey");
SetUpEventListeners();
