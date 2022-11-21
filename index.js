function scuberGreetingForFeet(distance){
  if (distance > 2500){
    return 'No can do.';
  }
  else if (distance > 2000){
    return 'I will gladly take your thirty bucks.';
  }
  else if (distance > 400){
    return `That will be twenty bucks.`;
  }
  else if (distance <= 400){
    return `This one is on me!`;
  }
}

function ternaryCheckCity(cityName){
  return cityName === "NYC" ? `Ok, sounds good.` : `No go.`;
}

function switchOnCharmFromTip(tipAmoun){
  switch(tipAmoun){
    case 'generous' : return `Thank you so much.`;
    case `not as generous` : return 'Thank you.';
    default : return `Bye.`;
  }
}