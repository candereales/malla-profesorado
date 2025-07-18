function mostrarInfo(nombre, correlativasRegularizar, correlativasAprobar) {
  let texto = `<h2>${nombre}</h2>`;
  texto += `<p>📘 <strong>Para cursar:</strong> ${correlativasRegularizar || 'Ninguna'}</p>`;
  texto += `<p>✅ <strong>Para aprobar:</strong> ${correlativasAprobar || 'Ninguna'}</p>`;

  document.getElementById("modal-texto").innerHTML = texto;
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
