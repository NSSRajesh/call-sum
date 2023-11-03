function operation(a,b,add){
	return add(a,b);
}
operation("10","20",sum);

function sum(a,b){
	let c=Number(a)+Number(b);
	document.write(c);
}