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
  mensagem = `${totalDeProjetos} projetos publicados`;
}

// 4. Escrevendo na página
document.querySelector('#contador').textContent = mensagem;
document.querySelector('#ano').textContent = anoAtual;

// 5. Registro para depuração
console.log(`[${NOME_DO_MURAL}] script carregado`);
console.table({ totalDeProjetos, anoAtual, mensagem });