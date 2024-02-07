let valor =parseInt(prompt("marca 1, avanzado, 2 sobresaliente, 3 basico, 4 te tiraste el año"))

switch(valor){

    case 1:
        alert("su nota es 5, su nivel es avanzado");
        break;    
    case 2: 
       alert ("su nota esta entre 4 y 4,9 su nivel es sobresaliente");
        break;
    case 3:
        alert("su nota esta entre 3 y 3,9 su nivel es basico");
        break;
    case 4:
     alert("su nota es menor a 3, te tiraste el año");
        break;
    default:
        alert("ingrese un valor valido");   
}
