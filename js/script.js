// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW


/*global $*/
// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
		
	function setenceToPigLatin(){
		// var vowels = ["a", "e", "i", "o", "u"]
		var sentence = $("#userInput").val();
		sentence = sentence.toString().toLowerCase();
		var wordsArray = sentence.split(" ");
		for(var i = 0; i < wordsArray.length; i++){
			var char = wordsArray[i][0];
			var secondChar = wordsArray[i][1];
			var pigLatinized;
			if(char==="a" || char === "e" || char === "i" || char === "o" || char === "u"){
				pigLatinized = wordsArray[i] + "yay";
			}
			else if(char==="s" && secondChar==="h"){
				var finalWord =wordsArray[i].substr(2);
				pigLatinized = finalWord+char+secondChar+"ay";
			}
			else{
				finalWord =wordsArray[i].substr(1);
				pigLatinized = finalWord+char+"ay";
			}
			$("#result").append(pigLatinized + " ");
		}
	}



// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 

$("#userInput").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#translate").click();
        }
    });
	
	$("#translate").click(function(){
		$("#result").html("");
		setenceToPigLatin();
	});
});

// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


