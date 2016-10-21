var total1 = 0;    
   
function test1(total) {   
   
for (var i=1; i< 1000; i++){


	if(i%3===0 || i%5===0 ){
		total += i;
	
	}
}

 return total;

}

total1= test1(total1);

alert(total1);