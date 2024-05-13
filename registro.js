function validateForm() {
    // Obtener los valores de los campos
    var usuario = document.getElementById("usuario").value.trim();
    var email = document.getElementById("email").value.trim();
    var contraseña = document.getElementById("contraseña").value.trim();

    // Validar que los campos no estén vacíos
    if (usuario === "" || email === "" || contraseña === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Validar el formato del correo electrónico utilizando una expresión regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    // Redirigir a home.html
    window.location.href = "home.html";
    alert("Cuenta creada exitosamente.")
}
