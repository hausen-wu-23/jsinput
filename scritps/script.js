const myDiv = document.getElementById("myDiv");
const main = document.getElementById("bg");

console.log(myDiv);

function myClick () {
  let name = document.getElementById('name').value;
  let color = document.getElementById('color').value;
  let checked = document.getElementById('check').checked;
  console.log(name, color);
  myDiv.innerHTML = "\n";
  myDiv.innerHTML += "\t\t<h1><mark>Hello, " + name + ", enjoy your colour!</mark></h1>\n";
  main.style.backgroundColor = color;
  if (checked){
    myDiv.innerHTML += "\t\t<h1><mark>checked</mark></h1>\n";
  }
  else{
    myDiv.innerHTML += "\t\t<h1><mark>Not checked</mark></h1>\n";
  }
}