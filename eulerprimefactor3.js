var num1 = 600851475143;
var factors =[];
var factorindex = 0;

function factor1(num) {

  for (var i=2; i<=num;){
    if (num%i === 0) {
    	factors[factorindex] = i;
    	factorindex++;
    	num /= i;
    }
    else {
    	i++;
    }


  }
return factors;
}

console.log(factor1(num1));