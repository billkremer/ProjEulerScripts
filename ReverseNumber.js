var testnum = 1234;

function ReverseNumber(num) {

  num = String(num);
  var ReversedNum = [];
	var RevNumNum = 0;
  var ReversedNumArray = [];
  
console.log(num[1]+"Start");
console.log(ReversedNum);

  for (var i = 0; i < num.length; i++) {
	  ReversedNumArray[i] = num[(num.length-i-1)];
  }
	console.log(ReversedNumArray)


	for (var j = 0; j < ReversedNumArray.length; j++) {
		RevNumNum += (    ReversedNumArray[j]  *  (10**j)   ); 
    console.log(RevNumNum)
	}

return RevNumNum;
  
}
console.log((ReverseNumber(testnum)));
