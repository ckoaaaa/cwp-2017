// >	поголемо
// <	помало
// >=	поголемо или еднакво
// <=	помало или еднакво
// ==	еднакво
// ===	апсолутно еднакво
// !=	нееднакво
// !==	апсолутно нееднакво

var kolichinaBrashno = 0.8;
var beloBrashno = true;
var crnoBrashno = true;
var torta = false;
var kolaci = true;


if(kolichinaBrashno > 1){
	console.log('Kje pravime torta!');
}
else {
	console.log('Prvo kupi brashno, pa posle kje pravime')
}


if(beloBrashno == true){
	console.log('Kje pravime so belo');
}
else if(crnoBrashno == true){
	console.log('Kje pravime so crno');
}
else {
	console.log('Nema da pravime');
}


if(torta == true){
	console.log('Kje jademe torta!')
}

else if(kolaci == true){
	console.log('Ako nema torta, kje jademe kolaci')
}

else {
	console.log('Kupi si isleri')
}

// + - / * %

console.log(2 + 2);
console.log(2 / 135);
console.log(4 - 12);
console.log(3 * 10);
console.log(10 % 18);

var broj = 5;

if(broj % 2 == 0){
	console.log('paren broj');
}
else{
	console.log('neparen');
}

var mesec = 'mart';

if(mesec.length % 2 == 0){
	console.log('ubav mesec');
}
else{
	console.log('grd mesec')
}

// && и
// || или

kolichinaBrashno = 0.7;
var brashno = true;

if(brashno == true && kolichinaBrashno >= 1){
	console.log('Ima brashno i e vo dovolna kolichina')
}
else{
	console.log('Nema brashno ili ne e vo dovolna kolichina')
}


broj = 7;

if(broj < 5 || broj > 10){
	console.log('brojot e pomal od 5 ili pogolem od 10')
}
else{
	console.log('brojot e vo opsegot od 5 do 10 vkluchuvajki gi i 5 i 10')
}

// true && true = true
// true && false = false
// false && true = false
// false && false = false

// true || true = true
// true || false = true
// false || true = true
// false || false = false


var mesec = 'Januari';

switch(mesec){
	case 'Januari':
		console.log('You chose January')
	break;
	case 'Fevruari':
		console.log('You chose February')
	break;
	case 'Mart':
		console.log('You chose Mart')
	break;
	case 'April':
		console.log('You chose April')
	break;
	case 'Maj':
		console.log('You chose Maj')
	break;
	case 'Juni':
		console.log('You chose Juni')
	break;
	case 'Juli':
		console.log('You chose Juli')
	break;
	case 'Avgust':
		console.log('You chose Avgust')
	break;
	case 'Septemvri':
		console.log('You chose Septemvri')
	break;
	case 'Oktomvri':
		console.log('You chose Oktomvri')
	break;
	case 'Noemvri':
		console.log('You chose Noemvri')
	break;
	case 'Dekemvri':
		console.log('You chose Dekemvri')
	break;
	default:
		console.log('Ne postoi vakov mesec')
	break;
}


switch(mesec){
	case 'Januari':
	case 'Fevruari':
	case 'Mart':
	case 'Oktomvri':
	case 'Noemvri':
	case 'Dekemvri':
		console.log('Izbravte laden mesec');
	break;

	case 'April':	
	case 'Maj':	
	case 'Juni':
	case 'Juli':	
	case 'Avgust':	
	case 'Septemvri':
		console.log('Izbravte topol mesec');
	break;
}


function zdravo(ime, prezime){
	console.log('Zdravo!' + ime + prezime);
}

zdravo('bojan', 'bojanovski');
zdravo('pero', 'perovski');