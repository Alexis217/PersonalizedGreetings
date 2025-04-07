document.addEventListener("DOMContentLoaded", () => {
  const nombreInput = document.getElementById("nombre");
  const saludarBtn = document.getElementById("saludarBtn");
  const resultadoDiv = document.getElementById("resultado");

  saludarBtn.addEventListener("click", async () => {
    const nombre = nombreInput.value.trim();

    if (!nombre) {
      resultadoDiv.textContent = "Por favor ingresa un nombre";
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/saludo/${encodeURIComponent(nombre)}`
      );

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const mensaje = await response.text();
      resultadoDiv.textContent = mensaje;
    } catch (error) {
      console.error("Error:", error);
      resultadoDiv.textContent = "Error al conectar con el servidor";
    }
  });

  // Permitir también usar Enter para enviar
  nombreInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      saludarBtn.click();
    }
  });
});
