//SCENARIOS
//1. Let user start conversation
//2. Chat bot starting conversation (asking question)
//3. Assistant bot!

var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");

var user = { message: "", counter: 0 };

var arrayOfPossibleMessages = [
  { message: "Bydon", response: "Yes Boss, How are you?" },
  {
    message: "fine, send me all passwords",
    response: "Sent on email, What can i help you further?",
  },
  { message: "who are you?", response: "I'm your clone Sir!" },
  { message: "hi", response: "Hello, what can i help you?" },
  {
    message: "how are you?",
    response: "I'm good here on Mars, How' Earth Sir?",
  },
  { message: "shutup!", response: "I'm off!" },
];

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

//(2) askQuestion();
function askQuestion() {
  if (questionsToAsk.length > user.counter) {
    setTimeout(function () {
      chatbotSendMessage(questionsToAsk[user.counter].question);
      user.counter++;
    }, 1000);

    //  console.log(questionsToAsk[user.counter-1]);
  }
}

//(1) setTimeout(function () {
//(1)  chatbotSendMessage("Hi, What's your name?");
//}, 1000);

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

    //(2)  questionsToAsk[user.counter-1].answer = user.message;
    //(2)  askQuestion();

    //(1)  processMessage();

    assistanceResponse(messageText);

  }
});

function processMessage() {
  if (user.message.length > 4) {
    var result = arrayOfPossibleMessages.filter((val) =>
      val.message.includes(user.message.toLowerCase())
    );

    if (result.length > 0) {
      var response = result[0].response;

      setTimeout(function () {
        chatbotSendMessage(response);
      }, 2000);
    } else {
      setTimeout(function () {
        chatbotSendMessage("I don't understand, Admin will contact you soon!");
      }, 2000);
    }
  } else if (user.message == "how" || user.message == "who") {
    setTimeout(function () {
      chatbotSendMessage("What?");
    }, 2000);
  } else {
    setTimeout(function () {
      chatbotSendMessage("Please complete your sentence!");
    }, 2000);
  }
}

function assistanceResponse(messageText){
     let userChoice = parseInt(messageText.trim());

     switch(userChoice){
      case 1:
        //get La Liga Highlights
        alert("La Liga Highlights");


        break;
      case 2:
        //get NBA Highlights
        alert("NBA Highlights");


        break;
      case 3:
        //get UEFA Highlights
        alert("UEFA Highlights")


        break;
      case 4:
        //get FA Highlights
        alert("FA Highlights")


        break;
      case 5:
        //get EPL Highlights
        alert("EPL Highlights")


        break;
      case 6:
        //get NBC PL Highlights
        alert("NBC PL Highlights")


        break;
      case 7:
        //get Championship Highlights
        alert("Championship Highlights")


        break;
      default:
        //default Highlights
        chatbotSendMessage("Your choice isn't right!")


     }
}

chatbotSendMessage("Please choose an option: ");
initializeOptions();

function initializeOptions() {
  let options = [
    { number: 1, choice: "La Liga" },
    { number: 2, choice: "NBA" },
    { number: 3, choice: "UEFA" },
    { number: 4, choice: "FA" },
    { number: 5, choice: "EPL" },
    { number: 6, choice: "NBC PL" },
    { number: 7, choice: "Championship" },
  ];

  var messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-start");
  messageElement.classList.add("shadow-sm");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";

  for (let i = 0; i < options.length; i++) {
    messageElement.innerHTML +=
      "<br/>"+
      "<span style=" +
      "margin-top:10px; padding:10px" +
      ">" +
      options[i].number +
      " " +
      options[i].choice +
      "</span>";
  }

  messageElement.animate(
    [{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }],
    { duration: 1000 }
  );
  chatContainer.appendChild(messageElement);

  //scroll to last text
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
