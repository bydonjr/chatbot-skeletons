//SCENARIO
//Assistance (Options) bot!

var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");

var user = { message: ""};

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

    assistanceResponse(messageText);

  }
});


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
