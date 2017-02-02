var wordBank = ["Stan", "Cartman", "Kenny", "Kyle", "Butters", "iCentipad", "Smug", "Warcraft", "Towelie", "Bastards", "Timmy", "Tweek", "Authorita", "Hippies", "Panda", "Randy"]
var resetState = false;
var numOfGuesses = 13;
var emptyArray = [];
var underscoreBox = document.getElementById("underscoreBox");
//var specificWord = wordBank[Math.floor(Math.random()*wordBank.length)];




function decreaseGuesses(specificWord){
				console.log("decreaseGuesses function");
				numOfGuesses = numOfGuesses - 1/(specificWord.length);
				document.getElementById("numOfGuesses").innerHTML = numOfGuesses;
			};

/*function letterCheck(specificWord, userInput, span){
	for (var i = 0; i<specificWord.length; i++){
					if (userInput == specificWord[i]){
					document.getElementById.className = "show";
					console.log(specificWord[i] + " is the right letter!");
					console.log(emptyArray[i] = userInput);//Should put the correct letter into the empty array
					//document.getElementById("resetState").onclick = function(){
					//	resetState = false;
					//}
				}
				else{
					decreaseGuesses();
			}
		}
	}*/

 function wordGenerator(){
 	console.log("wordGenerator function");
 	var specificWord = wordBank[Math.floor(Math.random()*wordBank.length)];
	var correctLength = specificWord.length;
	console.log("Word is: " + specificWord);
	return specificWord;
 }

 function underScores(specificWord, userInput, span){
 	/*console.log(specificWord);
 	specificWord = specificWord.split("");
 		for(i = 0; i<specificWord.length; i++){
 			var span = document.createElement('span');
 			span.innerHTML = specificWord[i];
 			console.log("Array is: " + specificWord[i]);
 			underscoreBox.appendChild(span);
 		}*/
 			console.log("underScores function");
 			console.log(specificWord);
 			console.log("length: " + specificWord.length);
 			for (var i = 0; i<specificWord.length; i++){
					if (userInput === specificWord[i].toLowerCase().toString()){
					console.log("User Input: " + userInput + "=" + specificWord[i]);
					span.className = "show";
					console.log(specificWord[i] + " is the right letter!");
					//Should put the correct letter into the empty array
					//document.getElementById("resetState").onclick = function(){
					//	resetState = false;
					//}
				}
				else{
					decreaseGuesses(specificWord);
					console.log(userInput + " != " + specificWord[i]);
			}
 		}
 		return specificWord;
 	}

/*while(!resetState){
	document.getElementById("resetButton").onclick = function(){
		resetState = true;
		alert("You have reset");
	}
}*/


//while(resetState){
	function startFunction(){
		var specificWord = wordBank[Math.floor(Math.random()*wordBank.length)];
		specificWord = specificWord.split("");
 		/*for(i = 0; i<specificWord.length; i++){
 			var span = document.createElement('span');
 			span.innerHTML = specificWord[i];
 			console.log("Array is: " + specificWord[i]);
 			underScores(specificWord, userInput, span);
 			underscoreBox.appendChild(span);
 		}*/
			window.onkeypress = function(event){
				//console.log(event.key);
				//console.log(event);
				//var correctLength = specificWord.length;
				var userInput = event.key.toLowerCase().toString();
				if(event.charCode >= 97 && event.charCode <= 122){
					for(i = 0; i<specificWord.length; i++){
 			var span = document.createElement('span');
 			span.innerHTML = specificWord[i];
 			console.log("Array is: " + specificWord[i]);
 			underScores(specificWord, userInput, span);
 			underscoreBox.appendChild(span);
 		}
					console.log("You pressed: " + userInput);
					//wordGenerator();
					//showGuesses();
				
					//underScores(specificWord, userInput, span);
					//console.log(specificWord);
					//letterCheck(specificWord, userInput, span);
			}
				else{
					alert("Please enter a letter from a to z");
					}

				}
		}

function resetFunction(){
	console.log("end");
};







