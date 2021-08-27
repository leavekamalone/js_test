import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      let first = (Point.x-center.x) ** 2;
      let sec = (Point.y-center.y) ** 2;
      let final = first + sec;
      let answer = Math.sqrt(final)
      if (answer < radius || answer === radius) {
        return true;
      }   
      else {
        return false;
      }   
    }
  }
}
