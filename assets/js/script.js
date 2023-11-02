var  EmailByDefault = "jair@gmail.com";
var PasswdByDefault = "pasword123";

var EmField = document.querySelector('.email1');
var PswdField = document.querySelector('.passwd1');
var Loggin_button = document.getElementById("btnloggin");
var CreateAC_button = document.getElementById("btnCAc");
var SCreateAC_button = document.getElementById("sbtnCAc");

var newAcEmail = document.querySelector('.newacem');
var newACPasswd = document.querySelector('.newacpsswd');

Loggin_button.addEventListener('click', function() {
    if (EmField.value === EmailByDefault && PswdField.value === PasswdByDefault){
        console.log(EmField.value);
        console.log(PswdField.value);
        alert('todo bien');
        window.location.href = "C:\\Users\\jair\\Desktop\\seguridad\\pagina de tecno.html";
    }
    else{
        alert('incorrecto');
    }
});

CreateAC_button.addEventListener('click', function() {
    window.location.href = "C:\\Users\\jair\\Desktop\\seguridad\\SignIn.html";
});

SCreateAC_button.addEventListener('click', function() {
    window.location.href = "C:\\Users\\jair\\Desktop\\seguridad\\index.html";
});