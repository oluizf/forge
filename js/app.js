// 1. Constantes: valores que não mudam durante a execução
const NOME_DO_MURAL = 'Mural da Turma';
const anoAtual = new Date().getFullYear();

// 2. Lendo o que já existe na página
const cards = document.querySelectorAll('.cartao');
const totalDeProjetos = cards.length;

// 3. let: o texto depende do total, então é decidido abaixo
let mensagem;
if (totalDeProjetos === 0) {
  mensagem = 'Nenhum projeto publicado ainda';
} else if (totalDeProjetos === 1) {
  mensagem = '1 projeto publicado';
} else {
  mensagem = `${totalDeProjetos} jogos publicados`;
}

// 4. Escrevendo na página
document.querySelector('#contador').textContent = mensagem;
document.querySelector('#ano').textContent = anoAtual;

// 5. Registro para depuração
console.log(`[${NOME_DO_MURAL}] script carregado`);
console.table({ totalDeProjetos, anoAtual, mensagem });

// Cotação do dólar: UMA variável global, usada por todos os itens
let cotacaoDolar = Number(window.prompt("Qual a cotação do dólar hoje? (ex.: 5.40)"));

// Preço em reais: UMA variável para cada item
const precoHalf = 60;
const precoLego = 60;
const precoPostal = 60;

// Cada item escreve o próprio valor na tela, com string formatada
document.getElementById("valprecoHalf").textContent = `BRL ${precoHalf.toFixed(2)}`;
document.getElementById("usdprecoHalf").textContent = `USD ${(precoHalf / cotacaoDolar).toFixed(2)}`;

document.getElementById("valprecoHalfb").textContent = `BRL ${precoHalf.toFixed(2)}`;
document.getElementById("usdprecoHalfb").textContent = `USD ${(precoHalf / cotacaoDolar).toFixed(2)}`;

document.getElementById("valprecoHalfo").textContent = `BRL ${precoHalf.toFixed(2)}`;
document.getElementById("usdprecoHalfo").textContent = `USD ${(precoHalf / cotacaoDolar).toFixed(2)}`;

document.getElementById("valprecoHalfd").textContent = `BRL ${precoHalf.toFixed(2)}`;
document.getElementById("usdprecoHalfd").textContent = `USD ${(precoHalf / cotacaoDolar).toFixed(2)}`;

document.getElementById("valprecoLego").textContent = `BRL ${precoLego.toFixed(2)}`;
document.getElementById("usdprecoLego").textContent = `USD ${(precoLego / cotacaoDolar).toFixed(2)}`;

document.getElementById("valprecoPostal").textContent = `BRL ${precoPostal.toFixed(2)}`;
document.getElementById("usdprecoPostal").textContent = `USD ${(precoPostal / cotacaoDolar).toFixed(2)}`;

function atualizarPrecos() {
  document.getElementById("valTenisAdidas").textContent = `BRL ${tenisAdidas.toFixed(2)}`;
  document.getElementById("usdTenisAdidas").textContent = `USD ${(tenisAdidas / cotacaoDolar).toFixed(2)}`;

  document.getElementById("valMochilaUrbana").textContent = `BRL ${mochilaUrbana.toFixed(2)}`;
  document.getElementById("usdMochilaUrbana").textContent = `USD ${(mochilaUrbana / cotacaoDolar).toFixed(2)}`;

  document.getElementById("valBoneAbaReta").textContent = `BRL ${boneAbaReta.toFixed(2)}`;
  document.getElementById("usdBoneAbaReta").textContent = `USD ${(boneAbaReta / cotacaoDolar).toFixed(2)}`;
}

atualizarPrecos();   // primeira vez: com a cotação padrão, assim que a página abre

// Quando clicar no botão do modal: lê o campo, valida, atualiza a tela
document.getElementById("btnAplicarCotacao").addEventListener("click", function () {
  const valor = Number(document.getElementById("campoCotacao").value);
  if (valor > 0) {
    cotacaoDolar = valor;
    atualizarPrecos();
  }
});
