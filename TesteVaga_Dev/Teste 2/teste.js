function pertenceFibonacci(numero) {
  let a = 0;
  let b = 1;

  while (b < numero) {
    [a, b] = [b, a + b];
  }

  return b === numero;
}

function verificarFibonacci() {
  let numero = parseInt(document.getElementById("numero").value);
  let resultado = document.getElementById("resultado");

  if (pertenceFibonacci(numero)) {
    resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
  } else {
    resultado.textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
}