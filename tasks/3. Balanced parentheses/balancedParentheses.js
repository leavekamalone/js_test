export function areParenthesesBalanced(inputString) {
  return !inputString.split("").reduce(function(previous, char) {
    if (previous < 0) {
      return previous;
    }
    
    if (char === "(") {
        ++previous
    }
    if (char === ")") {
      --previous;
    }
    return previous;


}, 0);
}