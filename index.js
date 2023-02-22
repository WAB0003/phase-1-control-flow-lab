function scuberGreetingForFeet(nums){
  // Write your code here!
  if (nums <= 400) {
    return "This one is on me!"
  } else if (nums < 2000) {
    return "That will be twenty bucks."
  } else if (nums < 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === "NYC"? "Ok, sounds good.":"No go.");
}

function switchOnCharmFromTip(tipType){
  // Write your code here!
  switch (tipType) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}