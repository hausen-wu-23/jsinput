const myDiv = document.getElementById('myDiv');
const main = document.getElementById('bg');

console.log(myDiv);

console.log(localStorage.getItem("data"));
var last = JSON.parse(localStorage.getItem("data"));

if (last) {
  var user_data = {
    'user_name': last.user_name,
    'color': last.color,
    'checked': last.checked,
    'pizza': last.pizza,
  };
  myDiv.innerHTML += '\t\t<h1>' + ((user_data.user_name) ? ('Last time you said your name was ' + user_data.user_name) : 'You didn\'t tell us your name') + '. Your favourite colour is ' + user_data.color + (user_data.checked ? '. You agreed our tos. ' : '. You did not agree our tos. ') + (user_data.pizza ? 'You liked pizza.' : 'You are a monster!<h1>\n');
}
else{
  var user_data = {
    'user_name': null,
    'color': null,
    'checked': null,
    'pizza': null,
  };
}

console.log(user_data);

function myClick() {
  user_data.user_name = document.getElementById('name').value;
  user_data.color = document.getElementById('color').value;
  user_data.checked = document.getElementById('check').checked;
  user_data.pizza = document.getElementById('choose1').checked;


  myDiv.innerHTML = '\n';

  if (user_data.user_name) {
    myDiv.innerHTML += '\t\t<h1><mark>Hello, ' + user_data.user_name + ', enjoy your colour!</mark></h1>\n';
  }
  else {
    myDiv.innerHTML += '\t\t<h1><mark>You didnt enter your user_name, but still, enjoy your colour!</mark></h1>\n';
  }

  main.style.backgroundColor = user_data.color;

  myDiv.innerHTML += '\t\t<h1><mark>' + (user_data.checked ? 'Agreed to tos :D' : 'You disagreed to the tos :◖') + '</mark></h1>\n';

  if (user_data.pizza)
    myDiv.innerHTML += '\t\t<h1><mark>You like pizza!</mark></h1>\n';
  else
    myDiv.innerHTML += '\t\t<h1><mark>You monster!</mark></h1>\n';

  console.log(JSON.stringify(user_data));
  localStorage.setItem("data", JSON.stringify(user_data));
}