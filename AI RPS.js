function AIAnswer(min, max) {
	return Math.floor(Math.random() * (max - min * 1)) + min;
}

	var AI = AIAnswer;
	var Hpick = ["Rock","Paper","Scissors"];
	var Hpick = prompt("Pick: (0) Rock, (1) Paper, or (2)Scissors");
console.log(Hpick);

	var Apick = ["Rock","Paper","Scissors"];
	var Apick = AIAnswer(0,3);
console.log (Apick);
function evaluate(){
	
switch (Hpick) {
    case Hpick[0] == Apick[0]:
			alert("Its a draw homie keep going");
        break;	
    case Hpick[1] == Apick[1]:
			alert("Its a draw homie keep going");
        break;
    case Hpick[2] == Apick[2]:
			alert("Its a draw homie keep going");
        break;
    case Hpick[1] == Apick[2]:
			console.log("My pick is Paper");
			console.log("AIPick is Scissors")
				alert("You lose");
        break;
    case Hpick[1] == Apick[0]:
			console.log("My pick is Paper");
			cosole.log("Ai pick is rock");
				alert("You win!")
        break;
	case Hpick[0] == Apick[1]:
			console.log("My pick is Rock");
			console.log("Ai pick is paper");
				alert("You lose");
        break;
	case Hpick[0] == Apick[2]:
			console.log("My pick is Rock");
			console.log("Ai pick is Scissors");
				alert("You win");
        break;
	case Hpick[2] == Apick[1]:
			console.log("My pick is Scissors");
			console.log("Ai pick is paper");
				alert("You win");
        break;
	case Hpick[2] == Apick[1]:
			console.log("My pick is Scissors");
			console.log("Ai pick is rock");
				alert("You lose")
        break;
}
}