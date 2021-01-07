const myDiv = document.getElementById("myDiv");
const main = document.getElementById("bg");

console.log(myDiv);

function myClick () {
  let name = document.getElementById('name').value;
  let color = document.getElementById('color').value;
  let checked = document.getElementById('check').checked;
  console.log(name, color);
  myDiv.innerHTML = "\n";
  if (name)
    myDiv.innerHTML += "\t\t<h1><mark>Hello, " + name + ", enjoy your colour!</mark></h1>\n";
  else
  myDiv.innerHTML += "\t\t<h1><mark>You didnt enter your name, but still, enjoy your colour!</mark></h1>\n";

  main.style.backgroundColor = color;
  myDiv.innerHTML += "\t\t<h1><mark>" + (checked ? "Agreed to tos :D" : "You disagreed to the tos :◖") + "</mark></h1>\n";
  
}