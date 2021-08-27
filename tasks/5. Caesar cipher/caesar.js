export function encryptCaesar(inputString, key) {
  key = key % 26;
  let lowerCaseStr = inputString.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newStr = '';

  for (let i = 0; i <lowerCaseStr.length; i++) {
      let currentLetter = lowerCaseStr[i];
      if (alphabet.indexOf(lowerCaseStr[i])===-1){
          newStr += currentLetter;
          continue;
      }
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + key;
      if(newIndex>25) newIndex = newIndex - 26;
      if(newIndex<0) newIndex = newIndex + 26;
      if(inputString[i] === inputString[i].toUpperCase()){
          newStr += alphabet[newIndex].toUpperCase();
      }
      else newStr+= alphabet[newIndex];
  }
return newStr;
}
