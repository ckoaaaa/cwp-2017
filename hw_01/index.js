function CtoF(degree){
	console.log(degree * 1.8 + 32);
}

CtoF(10)

function FtoC(degree){
	console.log((degree - 32) / 1.8);
}

FtoC(10)

function temp(degree, conversion){
	if(conversion == 'c2f'){
		console.log("Celsius to Farenheit" + ' ' + degree * 1.8 + 32)
	}
	else if(conversion == 'f2c'){
		console.log("Farenheit to Celsius" + ' ' + (degree - 32) / 1.8)
	}
	else{
		console.log("Can't understand question")
		}
}

temp(10, 'c2f');
temp(93, 'f2c');
temp(100, 'semos');