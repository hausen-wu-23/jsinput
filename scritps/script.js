const main_div = document.getElementById("myDiv");
const main = document.getElementById("bg");

var sessions = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : null;

if (sessions) {
  sessions.forEach((element, index) => {
    let user_data = {
      user_name: element.user_name,
      color: element.color,
      checked: element.checked,
      pizza: element.pizza,
    };
    main_div.innerHTML += "\t\t<h1>Session " + (index + 1) + ": </h1> \n";
    let user_message = "";
    user_message +=
      "\t\t<h2>" +
      (user_data.user_name
        ? "Last time you said your name was " + user_data.user_name
        : "You didn't tell us your name");
    user_message += ". Your favourite colour is " + user_data.color;
    user_message += user_data.checked
      ? ". You agreed our tos. "
      : ". You did not agree our tos. ";
    user_message += user_data.pizza
      ? "You liked pizza."
      : "You are a monster!</h2>\n";
    main_div.innerHTML += user_message;
  });
}

function textFocus(id) {
  document.getElementById(id).style.background = "yellow";
  document.getElementById(id).classList.remove("shrink");
  document.getElementById(id).classList.add("expand");
}

function textBlur(id) {
  document.getElementById(id).style.background = "white";
  document.getElementById(id).classList.remove("expand");
  document.getElementById(id).classList.add("shrink");
}

function myClick() {
  let user_data = {
    user_name: null,
    color: null,
    checked: null,
    pizza: null,
  };
  user_data.user_name = document.getElementById("name").value;
  user_data.color = document.getElementById("color").value;
  user_data.checked = document.getElementById("check").checked;
  user_data.pizza = document.getElementById("choose1").checked;

  main_div.innerHTML = "\n";

  if (user_data.user_name) {
    main_div.innerHTML +=
      "\t\t<h1><mark>Hello, " +
      user_data.user_name +
      ", enjoy your colour!</mark></h1>\n";
  } else {
    main_div.innerHTML +=
      "\t\t<h1><mark>You didnt enter your user_name, but still, enjoy your colour!</mark></h1>\n";
  }

  main.style.backgroundColor = user_data.color;

  main_div.innerHTML +=
    "\t\t<h1><mark>" +
    (user_data.checked ? "Agreed to tos :D" : "You disagreed to the tos :◖") +
    "</mark></h1>\n";

  if (user_data.pizza)
    main_div.innerHTML += "\t\t<h1><mark>You like pizza!</mark></h1>\n";
  else main_div.innerHTML += "\t\t<h1><mark>You monster!</mark></h1>\n";
  if (sessions) sessions.push(user_data);
  else sessions = [user_data];
  localStorage.setItem("data", JSON.stringify(sessions));
}
