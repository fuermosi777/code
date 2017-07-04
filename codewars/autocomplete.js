/*

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

*/

function autocomplete(input, dictionary){
  var res = [];
  input = input.match(/([a-zA-Z]+)/g).join('');
  for (var i = 0; i < dictionary.length; i++) {
    var word = dictionary[i];
    if (word.toLowerCase().startsWith(input.toLowerCase())) {
      if (res.length < 5) res.push(word);
    }
  }
  return res;
}