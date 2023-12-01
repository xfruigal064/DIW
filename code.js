document.addEventListener("DOMContentLoaded", function () {
    const formAlta = document.getElementById("altaLibrosForm");
    const pagPrincipal = document.getElementById("cuerpo");
    const formPrestamo = document.getElementById("prestamosForm");

    formAlta.style.display = "none";

    document.getElementById("altaymod").addEventListener("click", function (event) {
        event.preventDefault();
        formAlta.style.display = "block";
        pagPrincipal.style.display = "none";
        formPrestamo.style.display = "none";

    });
    document.getElementById("prestamos").addEventListener("click", function (event) {
        event.preventDefault();
        formAlta.style.display = "none";
        pagPrincipal.style.display = "none";
        formPrestamo.style.display = "block";
        
    });
    document.getElementById("bibliotecaPag").addEventListener("click", function (event) {
        event.preventDefault();
        formAlta.style.display = "none";
        pagPrincipal.style.display = "block";
        formPrestamo.style.display = "none";
        
    });

    
});


