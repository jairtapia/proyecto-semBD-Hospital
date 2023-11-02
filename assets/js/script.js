var  EmailByDefault = "tuusuariodeprueba";
var PasswdByDefault = "tucontraseñadeprueba";
/*cambiar los valores de estas dos varianles de arriba a tu gusto*/ 

var EmField = document.querySelector('.email1');
var PswdField = document.querySelector('.passwd1');
var Loggin_button = document.getElementById("btnloggin");
var CreateAC_button = document.getElementById("btnCAc");
var SCreateAC_button = document.getElementById("sbtnCAc");

var newAcEmail = document.querySelector('.newacem');
var newACPasswd = document.querySelector('.newacpsswd');
//tambien debes cambiar las posibles rutas en caso de que sean rutas absolutas
Loggin_button.addEventListener('click', function() {
    if (EmField.value === EmailByDefault && PswdField.value === PasswdByDefault){
        console.log(EmField.value);
        console.log(PswdField.value);
        alert('todo bien');
        window.location.href = "tu/ruta";
    }
    else{
        alert('incorrecto');
    }
});

CreateAC_button.addEventListener('click', function() {
    window.location.href = "tu/ruta";
});

SCreateAC_button.addEventListener('click', function() {
    window.location.href = "tu/ruta";
});