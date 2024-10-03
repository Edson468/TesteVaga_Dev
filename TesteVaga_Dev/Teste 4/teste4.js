function calcularPercentuais(faturamentoPorEstado) {
    let totalFaturamento = 0;
    for (const estado in faturamentoPorEstado) {
      totalFaturamento += parseFloat(faturamentoPorEstado[estado]);
    }

    const percentuais = {};
    for (const estado in faturamentoPorEstado) {
      const valor = parseFloat(faturamentoPorEstado[estado]);
      percentuais[estado] = (valor / totalFaturamento * 100).toFixed(2);
    }

    return percentuais;
  }

  const faturamentoPorEstado = {
    "SP": "67836.43",
    "RJ": "36678.66",
    "MG": "29229.88",
    "ES": "27165.48",
    "Outros": "19849.53"
  };

  const percentuais = calcularPercentuais(faturamentoPorEstado);
  const resultadosElement = document.getElementById('resultados');

  for (const estado in percentuais) {
    resultadosElement.innerHTML += `<p>${estado}: ${percentuais[estado]}%</p>`;
  }