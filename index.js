function scuberGreetingForFeet(ride){
  // Write your code here!
  
  if (ride > 2500) {
    return 'No can do.';
  }
  else if (ride > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (ride > 400) {
    return 'That will be twenty bucks.';
  }
  else {
    return 'This one is on me!';
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  }
  else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous') {
    return 'Thank you so much.';
  }
  else if (tip === 'not as generous') {
    return 'Thank you.';
  }
  else {
    return 'Bye.';
  }
}