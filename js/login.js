function redireccionar() {
    // Redireccionar a la página deseada
    window.location.href = "index.html";
};


const loginForm = document.querySelector('#login-form');
loginForm.onsubmit = login;

function login(event) {
    event.preventDefault();
    let usuario = document.getElementById("usuario");
    let clave = document.getElementById("clave");
    let error = false;
    document.getElementById("validar_usuario").innerHTML = "&nbsp; ";
    document.getElementById("validar_clave").innerHTML = "&nbsp; ";

    if (usuario.value == "") {
        document.getElementById("validar_usuario").innerHTML = "Debe completar el usuario";
        error = true;
        usuario.focus();
    }


    if (clave.value.length < 8) {
        document.getElementById("validar_clave").innerHTML = "Debe completar el clave con 8 caracteres como mínimo";
        error = true;
        clave.focus();
    } else {
        // Validar que la contraseña tenga al menos una letra mayúscula
        let tieneMayuscula = false;
        for (let i = 0; i < clave.value.length; i++) {
            if (clave.value[i] === clave.value[i].toUpperCase() && clave.value[i] !== clave.value[i].toLowerCase()) {
                tieneMayuscula = true;
                break;
            }
        }
        if (!tieneMayuscula) {
            document.getElementById("validar_clave").innerHTML = "La contraseña debe contener al menos una letra mayúscula";
            error = true;
            clave.focus();
        }
    }

    if (!error) {
        if(usuario.value == "admin" && clave.value == "Admin123"){
            sessionStorage.setItem('admin',true);
            window.location.href = "admin.html";
        }else{
            localStorage.setItem('user',usuario.value);
            redireccionar()    
        };
        
    };

};
