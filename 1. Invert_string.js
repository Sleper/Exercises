// Create JS function to invert string (example: "exercise" => experted output: "esicrexe")
function reverseString(str) {
	var splitString = str.split("");

	var reverseArray = splitString.reverse();

	var joinArray = reverseArray.join("");

	return joinArray;

}
reverseString('exercise');



 reverseString1(str){
	return str.split("").reverse().join("");
}

reverseString1('exercise')


function reverseString2(str) {

	var newString = "";
	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];	    
	}
	return newString;
}

reverseString2('exercise')