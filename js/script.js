function mostrarInfo(nombre, correlativasRegularizar, correlativasAprobar) {
  let texto = `📚 ${nombre}`;
  if (correlativasRegularizar || correlativasAprobar) {
    texto += `<br><br>📘 Para CURSAR: ${correlativasRegularizar || 'ninguna'}`;
    texto += `<br>✅ Para APROBAR: ${correlativasAprobar || 'ninguna'}`;
  } else {
    texto += `<br><br>✅ No tiene correlativas.`;
  }

  document.getElementById('infoMateria').innerHTML = texto;
}
