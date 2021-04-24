var count = 0;

function cc(card) {
  // Only change code below this line
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10) {
    count--;
  }

  switch(card) {
    case "J":
      count--;
      break;
    case "Q":
      count--;
      break;
    case "K":
      count--;
      break;
    case "A":
      count--;
      break;
  }

  const result = count > 0 ? "Bet" : "Hold";
  return `${count} ${result}`;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
