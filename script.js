function codificar() {
    var texto = document.getElementById("textoCodificar").value;
    var codificado = btoa(texto);
    document.getElementById("resultado").innerHTML = "Texto codificado: " + codificado;
  }
  
  function decodificar() {
    var texto = document.getElementById("textoDecodificar").value;
    var decodificado = atob(texto);
    document.getElementById("resultado").innerHTML = "Texto decodificado: " + decodificado;
  }
  