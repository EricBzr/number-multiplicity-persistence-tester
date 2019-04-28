function printMultiplicitySteps(number){
	
	let computed_product = number.toString().split("").reduce((a, x) => a *= parseInt(x), 1);
	
	if(number / 10 < 1){
		console.log(
	`------------------------------\nInput Number: ${number}\n------------------------------\nStep 0 | ${number}\n------------------------------\n`);
		return 1;
	}
	
	console.log(
	`------------------------------\nInput Number: ${number}\n------------------------------\nStep 0 | ${number}\n------------------------------\n` 
	+ sendMultiplicitySteps(computed_product, 1));
	
	return 2;
}

function sendMultiplicitySteps(number, step){
	
	if(number === 0 || number / 10 < 1){
		return `Step ${step} | ${number}\n------------------------------\n\n`;
	}
	
	let computed_product = number.toString().split("").reduce((a, x) => a *= parseInt(x), 1);
	
	return `Step ${step} | ${number}\n------------------------------\n` + sendMultiplicitySteps(computed_product, step + 1);
	
}


/*

EXAMPLE OUTPUT:

THIS:

||
\/

printMultiplicitySteps(8937);

GENERATES:

||
\/

------------------------------
Input Number: 8937
------------------------------
Step 0 | 8937
------------------------------
Step 1 | 1512
------------------------------
Step 2 | 10
------------------------------
Step 3 | 0
------------------------------

*/