function analisarFaturamento(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let diasComFaturamento = 0;
    let somaFaturamento = 0;

    const rows = doc.querySelectorAll('row');

    rows.forEach(row => {
      const dia = parseInt(row.querySelector('dia').textContent);
      const valor = parseFloat(row.querySelector('valor').textContent);

      if (valor > 0) {
        diasComFaturamento++;
        somaFaturamento += valor;
        menorValor = Math.min(menorValor, valor);
        maiorValor = Math.max(maiorValor, valor);
      }
    });

    const mediaMensal = somaFaturamento / diasComFaturamento;
    let diasAcimaMedia = 0;

    rows.forEach(row => {
      const valor = parseFloat(row.querySelector('valor').textContent);
      if (valor > mediaMensal) {
        diasAcimaMedia++;
      }
    });

    return {
      menorValor,
      maiorValor,
      diasAcimaMedia
    };
  }

  const htmlString = `
    <row>
      <dia>1</dia>
      <valor>31490.7866</valor>
    </row>
    <row>
      <dia>2</dia>
      <valor>37277.9400</valor>
    </row>
    <row>
      <dia>3</dia>
      <valor>37708.4303</valor>
    </row>
    <row>
      <dia>4</dia>
      <valor>0.0000</valor>
    </row>
    <row>
      <dia>5</dia>
      <valor>0.0000</valor>
    </row>
    <row>
      <dia>6</dia>
      <valor>17934.2269</valor>
    </row>
    <row>
      <dia>7</dia>
      <valor>0.0000</valor>
    </row>
    <row>
      <dia>8</dia>
      <valor>6965.1262</valor>
    </row>
    <row>
      <dia>9</dia>
      <valor>24390.9374</valor>
    </row>
    <row>
      <dia>10</dia>
      <valor>14279.6481</valor>
    </row>
    <row>
      <dia>11</dia>
      <valor>0.0000</valor>
    </row>
    <row>
      <dia>12</dia>
      <valor>0.0000</valor>
    </row>
    <row>
      <dia>13</dia>
      <valor>39807.6622</valor>
    </row>
    <row>
      <dia>14</dia>
      <valor>27261.6304</valor>
    </row>
    <row>
      <dia>15</dia>
      <valor>39775.6434</valor>
    </row>
    <row>
      <dia>16</dia>
      <valor>29797.6232</valor>
    </row>
    <row>
      <dia>17</dia>
      <valor>17216.5017</valor>
    </row>
    <row>
      <dia>18</dia>
      <valor>0.0000</valor>
    </row>
    <row>
      <dia>19</dia>
      <valor>0.0000</valor>
    </row>
    <row>
      <dia>20</dia>
      <valor>12974.2000</valor>
    </row>
    <row>
      <dia>21</dia>
      <valor>28490.9861</valor>
    </row>
    <row>
      <dia>22</dia>
      <valor>8748.0937</valor>
    </row>
    <row>
      <dia>23</dia>
      <valor>8889.0023</valor>
    </row>
    <row>
      <dia>24</dia>
      <valor>17767.5583</valor>
    </row>
    <row>
      <dia>25</dia>
      <valor>0.0000</valor>
    </row>
    <row>
      <dia>26</dia>
      <valor>0.0000</valor>
    </row>
    <row>
      <dia>27</dia>
      <valor>3071.3283</valor>
    </row>
    <row>
      <dia>28</dia>
      <valor>48275.2994</valor>
    </row>
    <row>
      <dia>29</dia>
      <valor>10299.6761</valor>
    </row>
    <row>
      <dia>30</dia>
      <valor>39874.1073</valor>
    </row>
  `;

  const resultados = analisarFaturamento(htmlString);
  const resultadosElement = document.getElementById('resultados');

  resultadosElement.innerHTML = `
    <p>Menor valor de faturamento: R$ ${resultados.menorValor.toFixed(2)}</p>
    <p>Maior valor de faturamento: R$ ${resultados.maiorValor.toFixed(2)}</p>
    <p>Dias com faturamento acima da média: ${resultados.diasAcimaMedia}</p>
  `;