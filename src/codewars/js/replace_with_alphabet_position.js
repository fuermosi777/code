/*
Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:
*/

function alphabetPosition(text) {
  var res = "";
  for (var i = 0; i < text.length; i++) {
    var code = text[i].toLowerCase().charCodeAt(0) - 96;
    if (code <= 26 && code >= 1) {
      res += code + " ";
    }
  }
  res = res.trim();
  return res;
}