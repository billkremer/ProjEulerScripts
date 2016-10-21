function FirstReverse(str) { 
var str = str;
var reverse = "";

  // code goes here
  
  for (var i=(str.length-1); i>= 0;i--) {
   console.log(i);
   console.log(str[i]);
   reverse = reverse.concat(str[i]);
   console.log(reverse);
  }
  return reverse;
  }

console.log(FirstReverse("five"));