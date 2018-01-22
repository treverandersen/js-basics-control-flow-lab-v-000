// Write your code in this file!
function scuberGreetingForFeet(f) {
  if (f <= 400) {
    return 'This one is on me!'
  } else if (f >= 2000 && f < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (f > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(c) {
  c === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
