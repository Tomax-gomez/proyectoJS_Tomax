let altura= prompt("ingrese su altura");

let peso= prompt("ingrese su peso");

let imc= peso/(altura*altura);

if(imc<= 18.5){

    alert("tienes bajo peso")
}else if(imc>= 18.5 && imc<= 24.9){
    alert ("tienes un peso normal")
}else if(imc>= 25 && imc <=29.9){
    alert("estas regordete hermanx")
}else if (imc>=30){
    alert("tienes obsesidad")
}else{
    alert("ingrese valores validos")
}