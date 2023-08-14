//SCENARIO
//Let user start conversation

var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");

var user = { message: "" };

function getDate(){
   var date = new Date();
   var day = date.getDay();
   var month = date.getMonth();
   var dayOfMonth = date.getDate();

   var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   return dayArray[day] + " , " +  monthArray[month]  + " " + dayOfMonth;
}

var arrayOfPossibleMessages = [
  {
    message: "fine, send me all passwords",
    response: "Sent on email, What can i help you further?",
  },
  { message: "who are you", response: "I'm your clone Sir!" },
  {
    message: "wow are you",
    response: "I'm good here on Mars, How' Earth Sir?",
  },
  {
    message: "find me a job",
    response: "<a href='https://www.indeed.com' target='_blank'>Indeed</a>",
  },
  { message: "bydon", response: "Yes Sir, What can i help you?" },
  { message: "hi", response: "Hi!, You are warmly welcome, How can i help you?" },
  { message: "today's date", response: getDate() },
];

setTimeout(function () {
  chatbotSendMessage("Hi, What's your name?");
}, 2000);

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
    let messageText = textbox.value.trim();
    user.message = messageText;
    sendMessage(messageText);
    textbox.value = "";

    processMessage();
  }
});

function processMessage() {
  if (user.message.length > 4 || user.message.includes('Hi')) {
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
        chatbotSendMessage("I don't understand!");
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

textbox.addEventListener("keypress", function (e) {
  //if user hits Enter button to send - Keyboard (13)
  if (e.which == 13) {
    if (textbox.value == "") {
      alert("Please type a message!");
    } else {
      let messageText = textbox.value;
      user.message = messageText;
      sendMessage(messageText);
      textbox.value = "";

      processMessage();
    }
  }
});
