let opc = parseInt(prompt("seleccione\n 1. registrarse\n 2. iniciar sesion \n 3. salir"))

switch(opc){

    case 1:
        document.write("registrarse");
     break;
     case 2:
        document.write("iniciar");
        break;
     case 3 :
        document.write("salir");
     default:
        alert("ingrese un valor valido");
        break;
    }