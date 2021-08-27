export function getFizzBuzzUntil(n) {

  let fb= [];
  for (let i = 1; i < n ; i++ ) {
      if (i % 3 === 0 && i%5 === 0) {
         fb.push('FizzBuzz');
      }
      else if (i % 3 === 0) {
        fb.push('Fizz');
      }
      else if (i%5 === 0) {
        fb.push('Buzz');
      }
      else {
        fb.push(i);
      }
    }
 
      return fb;

}
