const btnForward = document.getElementById('forward');
const btnBackward = document.getElementById('backward');

const carousel = document.getElementById('carousel');

let currentPosition = 0;

function pressForward() {
    currentPosition -= 100;
    currentPosition = Math.max(-1300, currentPosition);
    carousel.style.transform = `translateX(${currentPosition}px)`;
}

function pressBackward() {
    currentPosition += 100;
    currentPosition = Math.min(0, currentPosition);
    carousel.style.transform = `translateX(${currentPosition}px)`;
}


btnForward.addEventListener('click', pressForward);

btnBackward.addEventListener('click', pressBackward);

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


function mostrarSucursal() {
    var sucursalSeleccionada = document.getElementById("sucursal").value;
    var mapaIframe = document.getElementById("mapa-iframe");
    var enlaceMapa = document.getElementById("enlace-mapa");

    if (sucursalSeleccionada === "casa-central") {
        mapaIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.653382689082!2d-58.448302224885644!3d-34.58763605664795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f22f179757%3A0x9c5ca8c26875d076!2sAguirre%202187%2C%20C1414ATG%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1713570361895!5m2!1ses-419!2sar";
        enlaceMapa.href = "https://maps.app.goo.gl/zVLhHd2juFUXkfj49";
        enlaceMapa.textContent = "Aguirre 2187, CABA";
    } else if (sucursalSeleccionada === "sucursal-cordoba") {
        mapaIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54482.53735502373!2d-64.22936797142032!3d-31.409756531072173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2a8f14c30ef%3A0x707ff0a3a177b2ff!2sKia%20Ora%20Spa%20Urbano!5e0!3m2!1ses-419!2sar!4v1713570560922!5m2!1ses-419!2sar";
        enlaceMapa.href = "https://maps.app.goo.gl/f7RG1bsTpqpqxNBN8";
        enlaceMapa.textContent = "Av. Patria 352, Córdoba";
    } else if (sucursalSeleccionada === "sucursal-la-rioja") {
        mapaIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111204.56512378863!2d-67.02078795664065!3d-29.424626599999975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427dbc3cb045ce3%3A0xa2a3947c2e43f551!2sVELACENTER%20by%20Espacio%20Uno!5e0!3m2!1ses-419!2sar!4v1713570695587!5m2!1ses-419!2sar";
        enlaceMapa.href = "https://maps.app.goo.gl/y8AssbvbtnGvQVUV6";
        enlaceMapa.textContent = "Ecuador 837, La Rioja";
    }

}

window.onload = mostrarSucursal;

document.getElementById("sucursal").addEventListener("change", mostrarSucursal);

/*Para solucionar el desplazamiento del scroll por el header fijo*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/*Seccion contacto*/
var form = document.querySelector('#form');
var btnContact = document.querySelector('#btn-contact');




btnContact.onclick = (event) => {
    event.preventDefault();
    var errors = [];

    var firstName = document.querySelector('#firstname').value.trim();
    var lastName = document.querySelector('#lastname').value.trim();
    if (firstName === '' || lastName === '') {
        errors.push('El nombre y el apellido son obligatorios');
    }

    var birthdate = new Date(document.querySelector('#birthdate').value.trim());
    if (isNaN(birthdate)) {
        errors.push('Debes seleccionar una fecha de nacimiento válida');
    } else {
        var eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
        if (birthdate >= eighteenYearsAgo) {
            errors.push('Debes ser mayor de 18 años');
        }
    }

    var email = document.querySelector('#email').value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('El correo electrónico no es válido');
    }

    var branch = document.querySelector('#sucursal').value;
    if (branch === '') {
        errors.push('Debes seleccionar una sucursal');
    }

    var reason = document.querySelector('input[name="reason"]:checked');
    if (!reason) {
        errors.push('Debes seleccionar un motivo');
    }

    var query = document.querySelector('#query').value.trim();
    if (query === '') {
        errors.push('Debes ingresar una consulta');
    }

    

    if (errors.length === 0) {
        document.querySelector('#msj').innerHTML = 'Operación realizada satisfactoriamente.';
        for (var element of form.elements) {
            element.value = '';
        }
    } else {
        document.querySelector('#msj').innerHTML = errors.join(' <br> ');
       
    }
};



/*Registro*/

function redireccionar() {
    // Redireccionar a la página deseada
    window.location.href = "index.html";

}
function validar() {
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
        event.preventDefault();
        usuario.value = "";
        document.getElementById("validar_usuario").innerHTML = "&nbsp;";
        clave.value = "";
        document.getElementById("validar_clave").innerHTML = "&nbsp;";
        redireccionar();

    }

    return !error;
}

function validarNvoUsuario() {
    let usuarioNvo = document.getElementById("usuarioNvo");
    let claveNva = document.getElementById("claveNva");
    let error = false;
    document.getElementById("validar_usuarioNvo").innerHTML = "&nbsp; ";
    document.getElementById("validar_claveNva").innerHTML = "&nbsp; ";

    if (usuarioNvo.value == "") {
        document.getElementById("validar_usuarioNvo").innerHTML = "Debe completar el usuario";
        error = true;
        usuarioNvo.focus();
    }
    if (email.value == "") {
        document.getElementById("validar_mail").innerHTML = "Debe completar el mail";
        error = true;
        email.focus();
    }

    if (claveNva.value.length < 8) {
        document.getElementById("validar_claveNva").innerHTML = "Debe completar el clave con 8 caracteres como mínimo";
        error = true;
        claveNva.focus();
    } else {
        // Validar que la contraseña tenga al menos una letra mayúscula
        let tieneMayuscula = false;
        for (let i = 0; i < claveNva.value.length; i++) {
            if (claveNva.value[i] === claveNva.value[i].toUpperCase() && claveNva.value[i] !== claveNva.value[i].toLowerCase()) {
                tieneMayuscula = true;
                break;
            }
        }
        if (!tieneMayuscula) {
            document.getElementById("validar_claveNva").innerHTML = "La contraseña debe contener al menos una letra mayúscula";
            error = true;
            claveNva.focus();
        }
    }
    if (confirmClave.value === "") {
        document.getElementById("validar_confirmClave").innerHTML = "Las claves deben coincidir";
        error = true;
        confirmClave.focus();
    } else if (confirmClave.value !== claveNva.value) {
        document.getElementById("validar_confirmClave").innerHTML = "Las claves deben coincidir";
        error = true;
        confirmClave.focus();
    }

    if (!error) {
        event.preventDefault();
        usuarioNvo.value = "";
        document.getElementById("validar_usuarioNvo").innerHTML = "&nbsp;";
        claveNva.value = "";
        document.getElementById("validar_claveNva").innerHTML = "&nbsp;";
        redireccionar();

    }
    return !error;

}
function returnToHomePage() {
    // Cerrar la ventana emergente
    window.close();
    // Redirigir a la página original
    window.opener.location.reload(); // Actualiza la página original
    return false; // Previene que el botón haga otra acción después de cerrar la ventana emergente
}