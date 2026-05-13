const formulario = document.querySelector(".contacto-form");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Gracias por tu mensaje. Te responderemos pronto");
    formulario.reset();
});