function inverterString(texto) {
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }
    return textoInvertido;
  }
  
  let texto = "Olá, Mundo!";
  let textoInvertido = inverterString(texto);
  
  console.log(`Texto original: ${texto}`);
  console.log(`Texto invertido: ${textoInvertido}`);