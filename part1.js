IsPalindrome = STR => {
let i = 0;
while ( i < Math.floor(STR.length / 2)) {
  if (STR.length === 2){
    if (STR[i] !== STR[STR.length - i - 1]){
    return false;
    }
  return true;
  }
i++;
}}
