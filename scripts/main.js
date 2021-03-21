/*
 *	Use a function called querySelector() to grab a reference to your heading,
 *	then store it in a variable called myHeading 
 */

// const myHeading = document.querySelector('h1'); 
// myHeading.textContent = 'Hello world!';


// Add an image changer
    
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(myImage === 'images/computer-8bit.png') {
        myImage.setAttribute('src', 'images/computer-8bit.png');
    } else {
    	myImage.setAttribute('src', 'images/computer-8bit-1.png');
    } 
}

// Add a personalized welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = `Hello, ${myName}`;
	}
}

myButton.onclick = function() {
  setUserName();
}

var c = document.getElementById("Italkso");
var ctx = c.getContext("2d");
ctx.font = "50px Arial";
ctx.strokeText("Italkso",20,80);


