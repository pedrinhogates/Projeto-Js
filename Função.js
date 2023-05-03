function obtemValorAproximado(valor){
  const arrayParcelas = [
  { "parcela": "1", "valor": "1000.00" },
{ "parcela": "2", "valor": "500.00" },
{ "parcela": "3", "valor": "333.33" },
{ "parcela": "4", "valor": "250.00" },
{ "parcela": "5", "valor": "200.00" },
{ "parcela": "6", "valor": "166.66" },
{ "parcela": "7", "valor": "142.85" },
{ "parcela": "8", "valor": "125.00" },
{ "parcela": "9", "valor": "111.11" },
{ "parcela": "10", "valor": "100.00" },
];
let opcaoAprox = {}
let diferencaMaisProx = Infinity
for (let x = 0; x < arrayParcelas.length; x++) {
const parcelaAtual = arrayParcelas[x];
const valorAtual = parseFloat(parcelaAtual.valor);
var menorDif = Math.abs(valorAtual - valor);
if (menorDif < diferencaMaisProx) {
opcaoAprox ={
quantParce : parcelaAtual.parcela,
parcelaValor : parcelaAtual.valor,
};
diferencaMaisProx = menorDif;
}
}
return opcaoAprox
}


const resultFinal = obtemValorAproximado(225);
console.log(resultFinal);