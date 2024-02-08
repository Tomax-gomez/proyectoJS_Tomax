


let email = "toto@gmail.com";

let password ="xxx123"


let userEmail = prompt( "ingrese su correo")

let userpassword = prompt("ingrese su contraseña registrada")



if(email.match(userEmail)& password.match(userpassword)){

    document.write("bienvenido al sistema")
}else{
    alert("valide sus credenciales")
}
