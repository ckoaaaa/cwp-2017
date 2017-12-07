var niza1 = [2, 5, 3, 2, 3, 3, 5, 1, 1, 4, 4, 2, 4, 2, 2, 4];
var niza2 = [12, 15, 13, 22, 33, 31, 57, 1, 11, 44, 14, 2, 29, 45];
var niza3 = [19, 3, 14, 7, 55, 92, 234, 12, 22, 33, 74, 9, 15];

function zbirNaNeparniBroevi(niza){
	x = 0;
	for(var i=0; i < niza.length; i++){
		if(niza[i] % 2 != 0){
			x = x+niza[i];
		}
	}
	return 'x';
}

zbirNaNeparniBroevi(niza1);
console.log(x);
zbirNaNeparniBroevi(niza2);
console.log(x);
zbirNaNeparniBroevi(niza3);
console.log(x);

function prosek(niza){
	y = 0;
	for(var i=0; i < niza.length; i++){
		y=y+niza[i];
	}
	y = y/niza.length;
	return 'y'
}

prosek(niza1);
console.log(y);
prosek(niza2);
console.log(y);
prosek(niza3);
console.log(y);
		