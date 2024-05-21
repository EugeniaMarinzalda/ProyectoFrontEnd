document.addEventListener('DOMContentLoaded', function () {

    const headerContainer = document.getElementById('header-container');

    const headerHtml = `
        <a href="index.html">
            <img class="logo" src="./img/ODUJEN1.svg" alt="logo">
        </a>
        <button class="abrir-menu" id="abrir"><i class="bi bi-list"></i></button>
        <nav class="nav" id="nav">
            <button class="cerrar-menu" id="cerrar"><i class="bi bi-x"></i></button>
            <ul class="nav-list">
                <li><a href="#sec-servi">Tratamientos</a></li>
                <li><a href="#staff">Profesionales</a></li>
                <li><a href="#contact">Contáctanos</a></li>
                <li><a href="#branch">Locales</a></li>
                <li>
                    <a class="btn" href="registro.html" id="login-link" target="_blank">
                        <i class="fas fa-sign-in-alt login-icon"></i>
                        <span id="login-text" class="login-text">Iniciar Sesion</span>
                    </a>
                </li>
            </ul>
        </nav>` ;

    headerContainer.innerHTML = headerHtml;

});