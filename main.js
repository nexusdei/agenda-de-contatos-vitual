//VARIAVEIS
var form = document.getElementById('formulario')

var corpoAgenda = document.querySelector('.corpoTabela')

var linhas = '';

var nomes = []
var ddds = []
var numeros = []


//FUNÇÕES
function adicionaLinha(){
    var inputNome = document.querySelector('.Nome').value;
    var inputDDD = parseInt(document.querySelector('.DDD').value);
    var inputNumero = parseInt(document.querySelector('.Telefone').value);

    nomes.push(inputNome);
    ddds.push(inputDDD);
    numeros.push(inputNumero);

    var linha = '<tr class="itemNovo">';
    linha += `<td>${inputNome}`;
    linha += `<td>${inputDDD}`;
    linha += `<td>${inputNumero}`;

    linhas += linha;
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