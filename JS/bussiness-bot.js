//SCENARIO
//Business (Restaurant) bot!

var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");
var ticket = new Date().getTime();

var user = { message: "", Menu: [], ticket:ticket};

let options = [
  {},
  { number: 1, choice: "Milkshake", price: 10 },
  { number: 2, choice: "Sandwich", price: 14 },
  { number: 3, choice: "Cheeseburger", price: 16 },
];

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

    restaurantResponseToUser(messageText);
  }
});

function getTotalPrice(){
   let totalPrice = 0;

   for (let i=0; i<user.Menu.length; i++){
     totalPrice += user.Menu[i].price;
   }
   return totalPrice;
}

function restaurantResponseToUser(messageText) {
  let userChoice = parseInt(messageText.trim());

  switch (userChoice) {
    case 1:
      //get Milkshake
      chatbotSendMessage("Your choice is Milkshake");
      user.Menu.push(options[1]);
      console.log(user);
      chatbotSendMessage(
        "Something else? if yes, Choose Menu Number or 7 to checkout!"
      );

      break;
    case 2:
      //get Sandwich
      chatbotSendMessage("Your choice is Sandwich");
      user.Menu.push(options[2]);
      chatbotSendMessage(
        "Something else? if yes, Choose Menu Number or 7 to checkout!"
      );

      break;
    case 3:
      //get Cheeseburger
      chatbotSendMessage("Your choice is Cheeseburger");
      user.Menu.push(options[3]);
      chatbotSendMessage(
        "Something else? if yes, Choose Menu Number or 7 to checkout!"
      );

      break;
    case 7:
      //proceed checkout
      alert("Process checkout!");
      //chatbotSendMessage("You ordered: Meal Number "+user.Menu)
      chatbotSendMessage("Total Price: $"+ getTotalPrice());
      chatbotSendMessage("Click link below to complete checkout:")
      chatbotSendMessage("Pay with <a href='https://paypal.com'>Paypal</a> OR <a href='https://stripe.com'>Stripe</a>")
      //send to backend: Meals + ticket also on click(checkout, fetch location of a buyer)
      //Payment status

      break;
    default:
      //default Highlights
      chatbotSendMessage("Your choice isn't right!");
  }
  console.log(user);
}

chatbotSendMessage("Welcome to our Restaurant!");
chatbotSendMessage("Please choose an option: ");
showMenu();

function showMenu() {

  var messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-start");
  messageElement.classList.add("shadow-sm");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";

  for (let i = 1; i < options.length; i++) {
    messageElement.innerHTML +=
      "<br/>" +
      "<span style=" +
      "margin-top:10px; padding:10px" +
      ">" +
      options[i].number +
      " " +
      options[i].choice +
      "- $" +
      options[i].price +
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

      restaurantResponseToUser(messageText);
    }
  }
});
