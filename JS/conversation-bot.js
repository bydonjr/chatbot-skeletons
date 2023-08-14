//SCENARIO
//Chat bot starting conversation (asking question)

var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");

var user = { message: "", counter: 0 };

var questionsToAsk = [
  { question: "What's your name?", answer: "" },
  { question: "What's your Address?", answer: "" },
  { question: "Enter your Phone Number..", answer: "" },
  { question: "What's your Nationality?", answer: "" },
  { question: "Why applying for this Visa?", answer: "" },
  { question: "Do you have a destination?", answer: "" },
  { question: "Where?", answer: "" },
  { question: "How will you generate income?", answer: "" },
  { question: "What's your Education Level?", answer: "" },
  {
    question: "How many languages do you manage to understand and speak?",
    answer: "",
  },
];

askQuestion();
function askQuestion() {
  if (questionsToAsk.length > user.counter) {
    setTimeout(function () {
      chatbotSendMessage(questionsToAsk[user.counter].question);
      user.counter++;
    }, 1000);

    console.log(questionsToAsk[user.counter-1]);
  }
}


function chatbotSendMessage(messageText) {
  var messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-start");
  messageElement.classList.add("shadow-sm");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";

  messageElement.innerHTML =
    "<span><b>Bot:</b> </span>" +
    "<span style=" +
    "margin-top:10px; padding:10px" +
    ">" +
    messageText +
    "</span>";

  messageElement.animate(
    [{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }],
    { duration: 1000 }
  );
  chatContainer.appendChild(messageElement);

  //scroll to last text
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage(messageText) {
  var messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-end");
  messageElement.classList.add("shadow-sm");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";

  messageElement.innerHTML =
    "<span><b>You:</b> </span>" +
    "<span style=" +
    "margin-top:10px; padding:10px" +
    ">" +
    messageText +
    "</span>";

  messageElement.animate(
    [{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }],
    { duration: 1000 }
  );

  chatContainer.appendChild(messageElement);

  //scroll to last text
  chatContainer.scrollTop = chatContainer.scrollHeight;
}


sendBtn.addEventListener("click", function (e) {
  if (textbox.value == "") {
    alert("Please type a message!");
  } else {
    let messageText = textbox.value;
    user.message = messageText;
    sendMessage(messageText);
    textbox.value = "";

      questionsToAsk[user.counter-1].answer = user.message;
      askQuestion();

  }
});


