//Create JS function to find first unique charater in string (example: "asdasfafghj" => expected output: "d")
function firstNonRepeatedCharacter(word) {
  for (var i = 0; i < word.length; i++) {
  // Assignment of a letter to a variable
    var c = word[i];
    //then going through string checking for repeated letters
    if (word.indexOf(c) == i && word.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}