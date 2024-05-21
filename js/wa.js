document.addEventListener('DOMContentLoaded', function () {

    const waContainer = document.getElementById('wa-container');

    const waHtml = `
        <a href="https://api.whatsapp.com/send?phone=3025552030" class="whatsapp-link" target="_blank">
            <img src="./img/whatsapp.png" alt="Logo de WhatsApp" class="whatsapp-img">
        </a>`;

        
    waContainer.innerHTML = waHtml;

});