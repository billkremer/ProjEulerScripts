var Fibonacci = [1,1];


function FibonacciSum() {
var total = 0

for (var i=2; Fibonacci[i]<50; i++) {

Fibonacci[i]=Fibonacci[i-1]+Fibonacci[i-2];

    if (Fibonacci[i]%2 ===0) {
	console.log(Fibonacci[i]);
	total += Fibonacci[i];
    }
}
return total;
}
console.log(FibonacciSum());