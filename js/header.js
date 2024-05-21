document.addEventListener('DOMContentLoaded', function () {
   
    const headerContainer = document.getElementById('header-container');

    const headerHtml = `
        <a href="index.html#home">
            <img class="logo" src="./img/ODUJEN1.svg" alt="logo">
        </a>
        <button class="abrir-menu" id="abrir"><i class="bi bi-list"></i></button>
        <nav class="nav" id="nav">
            <button class="cerrar-menu" id="cerrar"><i class="bi bi-x"></i></button>
            <ul class="nav-list">
                <li><a href="index.html#sec-servi">Tratamientos</a></li>
                <li><a href="index.html#staff">Profesionales</a></li>
                <li><a href="index.html#contact">Contáctanos</a></li>
                <li><a href="index.html#branch">Locales</a></li>
                <li>
                    <a class="btn" href="registro.html" id="login-link" target="_blank">
                        <i class="fas fa-sign-in-alt login-icon"></i>
                        <span id="login-text" class="login-text">Iniciar Sesion</span>
                    </a>
                </li>
            </ul>
        </nav>` ;

    // Insertar el header en el contenedor
    headerContainer.innerHTML = headerHtml;
/*
    // Verificar el estado de la sesión
    const loginLink = document.getElementById('login-link');
    const loginText = document.getElementById('login-text');
 
    const isLoggedIn = localStorage.getItem('isLoggedIn');
 
     if (isLoggedIn) {
         loginText.textContent = 'Cerrar Sesión';
         loginLink.href = '#';
         loginLink.onclick = function () {
             localStorage.removeItem('isLoggedIn');
             location.reload();
         };
     } else {
         loginText.textContent = 'Iniciar Sesion';
         loginLink.href = 'registro.html';
     }*/
});