// Write JS function that generates all combinations of a string (example: "cat" => expected output: c, ca, cat, a, at, t)
function generateCombinations(word) {
   listOfstrings = new Array();
   for(i = 0; i < word.length; i++) {
       for(j = i + 1; j < word.length +  1; j++) {
           listOfStrings.push(word.slice(i, j));
       }
   }
   return listOfStrings;
}