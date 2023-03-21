const speedLimit = 70; // speed limit in km/h
const kmPerDemeritPoint = 5; // the number of km above the speed limit that results in one demerit point

let speed = parseInt(prompt("Please enter the speed of the car in km/h:"));
let demeritPoints = 0;

if (speed <= speedLimit) {
  console.log("Ok");
} else {
  // calculate the number of demerit points based on the speed
  demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(`Demerit points: ${demeritPoints}`);
  }
}
