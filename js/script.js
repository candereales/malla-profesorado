function mostrarInfo(nombre, correlativasCursada, correlativasAprobacion) {
  let contenido = `<h2>${nombre}</h2>`;

  if (correlativasCursada || correlativasAprobacion) {
    contenido += "<ul>";
    if (correlativasCursada) {
      contenido += `<li><strong>📘 Para cursar:</strong> ${correlativasCursada}</li>`;
    }
    if (correlativasAprobacion) {
      contenido += `<li><strong>✅ Para aprobar:</strong> ${correlativasAprobacion}</li>`;
    }
    contenido += "</ul>";
  } else {
    contenido += "<p>No tiene correlativas registradas.</p>";
  }

  document.getElementById("modal-texto").innerHTML = contenido;
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// Cierra el modal al hacer clic fuera del contenido
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
