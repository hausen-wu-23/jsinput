const myDiv = document.getElementById('myDiv');
const main = document.getElementById('bg');

console.log(myDiv);

var not_first_time = localStorage.getItem('first');
var user_name = localStorage.getItem('user_name');
var color = localStorage.getItem('color');
var checked = localStorage.getItem('tos');
var pizza = localStorage.getItem('pizza');

if (not_first_time)
  myDiv.innerHTML += '\t\t<h1>'+ ((!user_name) ? ('Last time you said your name was ' + user_name) : 'You didn\'t tell us your name') + '. Your favourite colour is '+color+ (checked ? '. You agreed our tos. ' : '. You did not agree our tos. ') + (pizza ? 'You liked pizza.' : 'You are a monster!<h1>\n');
function myClick () {
  user_name = document.getElementById('name').value;
  color = document.getElementById('color').value;
  checked = document.getElementById('check');
  pizza = document.getElementById('choose1');
  // let pizza2 = document.getElementById('choose2');
  console.log(user_name, color);
  myDiv.innerHTML = '\n';
  if (user_name){
    myDiv.innerHTML += '\t\t<h1><mark>Hello, ' + user_name + ', enjoy your colour!</mark></h1>\n'; 
    localStorage.setItem('user_name', user_name);
  }
  else{
    myDiv.innerHTML += '\t\t<h1><mark>You didnt enter your user_name, but still, enjoy your colour!</mark></h1>\n';
    localStorage.setItem('user_name', null);
  }
  main.style.backgroundColor = color;
  localStorage.setItem('color', color);

  myDiv.innerHTML += '\t\t<h1><mark>' + (checked.checked ? 'Agreed to tos :D' : 'You disagreed to the tos :◖') + '</mark></h1>\n';
  localStorage.setItem('tos', checked.checked);

  if (pizza.checked)
    myDiv.innerHTML += '\t\t<h1><mark>You like pizza!</mark></h1>\n';
  else
    myDiv.innerHTML += '\t\t<h1><mark>You monster!</mark></h1>\n';
  localStorage.setItem('pizza', pizza.checked);
  localStorage.setItem('first', true);

}