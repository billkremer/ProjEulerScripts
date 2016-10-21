var num2 = 1;
var num1 = 1;
var numcurrent = 2;

function FibonacciSum() {   

var total = 0;
var hold = numcurrent;

for (var i=1; i< 10; i++){

console.log("hold "+hold);
console.log("num1 "+num1);
console.log("num2 "+num2);
numcurrent = num1 + num2;
console.log("numcurrent "+numcurrent);
num2 = num1;
num1 = hold;
hold = numcurrent;

if (numcurrent%2 === 0) {
	total += numcurrent;
}
	
	}


 return total;

}

console.log(FibonacciSum());
