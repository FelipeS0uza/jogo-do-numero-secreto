let numerosEscolhidos = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;


function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Portuguese Female', {rate:1})
}

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número entre 1 e 10');

function gerarNumero() {
    let num = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeLista = numerosEscolhidos.length;
    if(quantidadeLista == numeroLimite) {
        numerosEscolhidos = []
    }
    if (numerosEscolhidos.includes(num)) {
        return gerarNumero();
    } else {
        numerosEscolhidos.push(num);
        return num
    }
};

function verificarChute() {
    let chute = document.querySelector('input').value;
    let tent = tentativas == 1 ? 'logo de primeira' : `com ${tentativas} tentativas`;
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou !!!');
        exibirTexto('p', `Meus parabéns, você descobriu o número secreto ${tent}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciar() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', true)
};