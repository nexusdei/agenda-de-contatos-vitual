//VARIAVEIS
var form = document.getElementById('formulario')

var corpoAgenda = document.querySelector('.corpoTabela')

var linhas = '';

var nomes = []
var ddds = []
var numeros = []

//FUNÇÕES
function adicionaLinha(){
    var inputNome = document.querySelector('.Nome');
    var inputDDD = document.querySelector('.DDD');
    var inputNumero = document.querySelector('.Telefone');

    nomes.push(inputNome.value);
    ddds.push(inputDDD);
    numeros.push(inputNumero);

    var linha = '<tr class="itemNovo">';
    linha += `<td>${inputNome.value}`;
    linha += `<td>${inputDDD.value}`;
    linha += `<td>${inputNumero.value}`;
    linhas += linha;

    inputNome.value = ''
    inputDDD.value = ''
    inputNumero.value = ''
}

function atualizaTabela(){
    corpoAgenda.innerHTML = linhas
}

//LISTENERS
form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})