let dow = prompt("Please enter the day to learn schedule :");
switch (dow) {
  case "monday":
    console.log(`InClass lessons on ${dow}s`);
    break;
  case "tuesday":
    console.log(`InClass lessons on ${dow}s`);
    break;
  case "wednesday":
    console.log(`InClass lessons on ${dow}s`);
    break;
  case "thursday":
    console.log(`InClass lessons on ${dow}s`);
    break;
  case "friday":
    console.log(`Teamwork on ${dow}s`);
    break;
  case "saturday":
    console.log(`InClass lessons and Workshop on ${dow}s`);
    break;
  case "sunday":
    console.log(`Self-Study time on ${dow}s`);
    break;
  default:
    console.log(`please enter a valid day name`);
    break;
}
