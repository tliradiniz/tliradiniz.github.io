var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagens/nalcs.png') {
      myImage.setAttribute ('src','imagens/eulcs.png');
    } else {
      myImage.setAttribute ('src','imagens/nalcs.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Bem vindo ao LCS News, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Bem vindo ao LCS News, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
