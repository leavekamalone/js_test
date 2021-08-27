export function isPalindrome(arr) {
  let stringg = arr;
  let reversed = stringg.split('').reverse().join('');
  //return reversed
  
  const punctuationF = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  
  function removePunctuationF() {
    return reversed
      .split('')
      .filter(function(letter) {
        return punctuationF.indexOf(letter) === -1;
      })
      .join('')
      .toLowerCase()
      .replace(/\s/g,'');  
  
  }
  //return removePunctuationF(reversed)
  const punctuationS = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  
  
  function removePunctuationS() {
    return stringg
      .split('')
      .filter(function(letter) {
        return punctuationS.indexOf(letter) === -1;
      })
      .join('')
      .toLowerCase()
      .replace(/\s/g,'');
      
  }
  
    //return removePunctuationS(stringg)
  if (removePunctuationF(arr) === removePunctuationS(arr)){
    return true;
  }
  else {
    return false;
  }
}