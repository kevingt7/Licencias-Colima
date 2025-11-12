// scripts.js

// Función para guardar datos del formulario en localStorage
function guardarDatosFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    
    // Guardar los datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("telefono", telefono);
}

// Función para guardar la fecha de la cita en localStorage
function guardarFechaCita() {
    const fechaCita = document.getElementById("fecha-cita").value;
    // Guardar la fecha en localStorage
    localStorage.setItem("fechaCita", fechaCita);
}

// Función para mostrar los datos almacenados en la página de comprobante
function mostrarComprobante() {
    const nombre = localStorage.getItem("nombre");
    const email = localStorage.getItem("email");
    const telefono = localStorage.getItem("telefono");
    const fechaCita = localStorage.getItem("fechaCita");

    // Mostrar los datos en los elementos HTML
    document.getElementById("nombre").textContent = nombre || "N/A";
    document.getElementById("email").textContent = email || "N/A";
    document.getElementById("telefono").textContent = telefono || "N/A";
    document.getElementById("fecha-cita").textContent = fechaCita || "N/A";
}
