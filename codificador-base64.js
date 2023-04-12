function codificarDecodificar() {
    var texto = document.getElementById("texto").value;
    var codificado = btoa(texto);
    var decodificado = atob(codificado);
    document.getElementById("resultado").innerHTML = "Texto codificado: " + codificado + "<br>Texto decodificado: " + decodificado;
  }
  