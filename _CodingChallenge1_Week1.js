function challenge(word) {
	if (word=="") {
		word = "Enter a number within 0 and including 1000";
	}
	var number = parseInt(window.prompt(word,""));
	numbercheck(number);
};

function numbercheck(number) {
	    if (number <= 1000 && number >= 0) {
    document.write("(" + number + ") is within range", "");
    if (number/3!=NaN&&number/5!=NaN) {
		console.log("Fizz Buzz");
	}
	if (number/3!=NaN&&number/5==NaN) {
		console.log("Fizz");
	}
	if (number/5!=NaN&&number/3==NaN) {
		console.log("Buzz");
	}
} else if (isNaN(number)) {
    console.log("It is not a number" (" + number + "), "");
} else {
    console.log("" + number + ") is out of range", "");
}
}

challenge.sort=function(array){
	const sorted =[]
		array.foreach((e1))=>array.foreach((e2)=>{
		if(e1<e2){
			sorted.push(e1)
		}
	}
	);
		return sorted;
}