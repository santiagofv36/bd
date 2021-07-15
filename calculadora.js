const operacion = (x,y,op)=>{
	if (op == 1){
		return [parseInt(x)+parseInt(y),'+'];
	}else if(op == 2){
		return [parseInt(x)-parseInt(y),'-'];
	}else if(op == 3){
		return [parseInt(x)*parseInt(y),'*'];
	}else if(op == 4){
		if (y != 0){
			return [parseInt(x)/parseInt(y),'/'];
		}else{
			alert('No puedes dividir por 0');
			return ['undefined','/'];
		}
	}else{
		alert('Opcion no valida...');
		return ['Null','Operacion no valida']
	}
}
alert('Que operacion quieres hacer? ');
let op = prompt('1.-Sumar 2.-Restar 3.-Multiplicar 4.-Dividir');
let n1 = prompt('Indique numero');
let n2 = prompt('Indique numero');
res = operacion(n1,n2,op)
document.write(`${n1} ${res[1]} ${n2} = ${res[0]}`)
