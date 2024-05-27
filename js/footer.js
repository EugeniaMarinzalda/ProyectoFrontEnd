document.addEventListener('DOMContentLoaded', function () {

    const footerContainer = document.getElementById('footer-container');

    const footerHtml = `
        <div class="container-footer">
            <div class="footer-row">
                <div class="footer-links">
                    <img class="footer-logo" src="./img/logo_white.svg" alt="Logo Beauty Spa">
                    <p id="reseña">Beauty Spa ofrece tratamientos personalizados para el cuidado de la piel. 
                    Analizamos cuidadosamente tu piel para brindarte soluciones personalizadas.</p>
                </div>
                
            <div class="footer-links">
                <h4>Tratamientos</h4>
                <ul>
                    <li><a href="tratamiento.html">Hydrafacial</a></li>
                    <li><a href="depilacion.html">Depilación Laser</a></li>
                    <li><a href="relleno.html">Relleno Facial</a></li> 
                    <li><a href="reflexologia.html">Tratamiento Reflexogeno</a></li> 
                    <li><a href="radiofrecuencia.html">Radiofrecuencia</a></li> 
                </ul>
            </div>

            <div class="footer-links">
                <h4>Contenido</h4>
                <ul>
                    <li><a href="index.html#home">Home</a></li>
                    <li><a href="index.html#sec-servi">Tratamientos</a></li>
                    <li><a href="index.html#staff">Profesionales</a></li>
                    <li><a href="index.html#contact">Contáctanos</a></li>
                    <li><a href="index.html#branch">Locales</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h4>Contacto</h4>
                <ul>
                    <li><a href="tel:+30255552030"><i class="fa-solid fa-phone-volume"></i> (302) 5555-2030</a></li>
                    <li><a href="mailto:beautyspa@gmail.com"><i class="fa-solid fa-envelope"></i> beautyspa@gmail.com</a></li>
                    <li><a href="https://www.google.com/maps/search/?api=1&query=Aguirre+2187+CABA"
                            target="_blank"><i class="fa-solid fa-location-dot"></i> Aguirre 2187 CABA</a></li>
                </ul>
            </div>
            
            <div class="social-media">

                <a href="https://www.facebook.com/?locale=es_LA" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/?lang=es" target="_blank"><i class="fab fa-x-twitter"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://ar.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>

            </div>
            <div class="copyrigth">
                <p>© 2024 All rights reserved Created by GRUPO 15 CAC</p>
            </div>

        </div>`;

    footerContainer.innerHTML = footerHtml;
});