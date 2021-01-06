const myDiv = document.getElementById("myDiv");
const main = document.getElementById("bg");

console.log(myDiv);

function myClick () {
  var name = document.getElementById('name').value;
  var color = document.getElementById('color').value;
  console.log(name, color);
  myDiv.innerHTML = "\n";
  myDiv.innerHTML += "\t\t<h1>Hello, " + name + ", enjoy your colour!</h1>\n";
  main.style.backgroundColor = color;
}