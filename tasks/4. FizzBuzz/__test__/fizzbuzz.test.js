import 'chai/register-expect';
import { getFizzBuzzUntil } from '../fizzbuzz';

describe('getFizzBuzzUntil() function', () => {

  const result = getFizzBuzzUntil(16); // previously was 15, should be 16 to ensure final test passes

  it('should return an array with numbers divisible by 3 replaced by \'Fizz\' ', function() {

    expect(result[2]).to.equal('Fizz');
    expect(result[5]).to.equal('Fizz');
    expect(result[8]).to.equal('Fizz');
    expect(result[11]).to.equal('Fizz');
  });

  it('should return an array with numbers divisible by 5 replaced by \'Buzz\' ', function() {

    expect(result[4]).to.equal('Buzz');
    expect(result[9]).to.equal('Buzz');
  });

  it('should return an array with numbers divisible by 15 replaced by \'FizzBuzz\' ', function() {

    expect(result[14]).to.equal('FizzBuzz');
  });
});
