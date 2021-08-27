export function getFibonacciUntil(n) {
  if (n === 1) {
    return [0,1];
  }
  else {
    let present = getFibonacciUntil(n-1);
    present.push(present[present.length - 1] + present[present.length - 2])
    return present;
  }
}
