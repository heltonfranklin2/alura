<script>
// Função que codifica o texto
function codificar() {
  // Verifica se a chave tem 16 caracteres
  if (chave.value.length != 16) {
    alert("A chave deve ter 16 caracteres!");
    return;
  }

  // Gera a chave de criptografia a partir da chave digitada
  var chaveCripto = CryptoJS.enc.Utf8.parse(chave.value);

  // Gera o vetor de inicialização aleatório
  var iv = CryptoJS.lib.WordArray.random(16);

  // Gera o texto criptografado
  var textoCripto = CryptoJS.AES.encrypt(texto.value, chaveCripto, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  // Codifica o texto criptografado em Base64
  var textoCodificado = iv.concat(textoCripto.ciphertext).toString(CryptoJS.enc.Base64);

  // Exibe o texto codificado na caixa de saída
  saida.value = textoCodificado;
}

// Função que decodifica o texto
function decodificar() {
  // Verifica se a chave tem 16 caracteres
  if (chave.value.length != 16) {
    alert("A chave deve ter 16 caracteres!");
    return;
  }

  // Gera a chave de criptografia a partir da chave digitada
  var chaveCripto = CryptoJS.enc.Utf8.parse(chave.value);

  // Decodifica o texto codificado em Base64
  var textoDecodificado = CryptoJS.enc.Base64.parse(texto.value);

  // Separa o vetor de inicialização e o texto criptografado
  var iv = textoDecodificado.clone();
  iv.sigBytes = 16;
  var textoCripto = textoDecodificado.clone();
  textoCripto.words.splice(0, 4);
  textoCripto.sigBytes -= 16;

  // Decodifica o texto criptografado
  var textoDecripto = CryptoJS.AES.decrypt(
    {
      ciphertext: textoCripto,
    },
    chaveCripto,
    {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  // Exibe o texto decodificado na caixa de saída
  saida.value = textoDecripto.toString(CryptoJS.enc.Utf8);
}
</script>